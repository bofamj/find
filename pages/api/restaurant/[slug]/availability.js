import { times } from "../../../../data/index";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { slug, day, time, partySize } = req.query;
  if (!slug || !day || !time || !partySize) {
    return res.status(400).json({ message: "bad request" });
  }

  //*giting the sharch time array frime the times object
  const { searchTimes } = times.find((tinming) => tinming.time === time);
  if (!searchTimes) {
    return res.status(400).json({ message: "bad request" });
  }

  //*get the booking tables at the serch time

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: {
      number_of_people: true,
      booking_time: true,
      tables: true,
    },
  });

  const bookingTableCount = {};

  bookings.forEach((booking) => {
    bookingTableCount[booking.booking_time.toISOString()] =
      booking.tables.reduce((ogj, table) => {
        console.log(
          "🚀 ~ file: availability.js:40 ~ booking.tables.reduce ~ ogj:",
          ogj
        );
        return {
          ...ogj,
          [table.table_id]: true,
        };
      }, {});
  });

  const restaurantTables = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      table: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurantTables) {
    return res.status(400).json({ message: "bad request" });
  }

  const tableWithSearchTime = searchTimes.map((searchTime) => {
    return {
      date: new Date(`${day}t${searchTime}`),
      time: searchTime,
      tables: restaurantTables.table,
    };
  });

  tableWithSearchTime.forEach((tableTime) => {
    tableTime.tables = tableTime.tables.filter((table) => {
      if (bookingTableCount[tableTime.date.toISOString()]) {
        if (bookingTableCount[tableTime.date.toISOString()][table.id])
          return false;
      }
      return true;
    });
  });

  const avilableTables = tableWithSearchTime
    .map((t) => {
      const sumSeats = t.tables.reduce((sum, table) => {
        return sum + table.seats;
      }, 0);

      return {
        time: t.time,
        avilable: sumSeats >= parseInt(partySize),
      };
    })
    .filter((avilableTable) => {
      const timeIsBeforeOpening =
        new Date(`${day}T${avilableTable.time}`) >=
        new Date(`${day}T${restaurantTables.open_time}`);
      const timeIsAfterClosingTime =
        new Date(`${day}T${avilableTable.time}`) <=
        new Date(`${day}T${restaurantTables.close_time}`);
      return timeIsBeforeOpening && timeIsAfterClosingTime;
    });

  return res.status(200).json(avilableTables);
}
/* import { PrismaClient } from "@prisma/client";

import { times } from "../../../../data";
import { findAvailabileTables } from "../../../../services/restaurant/findAvailableTables";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { slug, day, time, partySize } = req.query;

    if (!day || !time || !partySize) {
      return res.status(400).json({
        errorMessage: "Invalid data provided",
      });
    }

    const restaurant = await prisma.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        table: true,
        open_time: true,
        close_time: true,
      },
    });

    if (!restaurant) {
      return res.status(400).json({
        errorMessage: "Invalid data provided",
      });
    }

    const searchTimesWithTables = await findAvailabileTables({
      day,
      time,
      res,
      restaurant,
    });

    if (!searchTimesWithTables) {
      return res.status(400).json({
        errorMessage: "Invalid data provided",
      });
    }

    const availabilities = searchTimesWithTables
      .map((t) => {
        const sumSeats = t.tables.reduce((sum, table) => {
          return sum + table.seats;
        }, 0);

        return {
          time: t.time,
          available: sumSeats >= parseInt(partySize),
        };
      })
      .filter((availability) => {
        const timeIsAfterOpeningHour =
          new Date(`${day}T${availability.time}`) >=
          new Date(`${day}T${restaurant.open_time}`);
        const timeIsBeforeClosingHour =
          new Date(`${day}T${availability.time}`) <=
          new Date(`${day}T${restaurant.close_time}`);

        return timeIsAfterOpeningHour && timeIsBeforeClosingHour;
      });

    return res.json(availabilities);
  }
} */
