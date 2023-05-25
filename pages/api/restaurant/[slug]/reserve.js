import { PrismaClient } from "@prisma/client";
import { times } from "../../../../data/index";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { slug, day, time, partySize } = req.query;
  const {
    bookerEmail,
    bookerPhone,
    bookerFirstName,
    bookerLastName,
    bookerOccasion,
    bookerRequest,
  } = req.body;

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    return res.status(400).json({ message: "bad request" });
  }
  if (
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.close}`)
  ) {
    return res
      .status(400)
      .json({ message: "the restaurant is close at this time" });
  }

  const { searchTimes } = times.find((tinming) => tinming.time === time); //*
  if (!searchTimes) {
    return res.status(400).json({ message: "bad request" });
  }

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

  const bookingTime = tableWithSearchTime.find((timing) => {
    return (
      timing.date.toISOString() === new Date(`${day}T${time}`).toISOString()
    );
  });

  const tablesCount = { 2: [], 4: [] };
  bookingTime.tables.forEach((table) => {
    if (table.seats === 2) {
      tablesCount[2].push(table.id);
    } else {
      tablesCount[4].push(table.id);
    }
  });

  const bookingTables = [];
  let remaingSeates = parseInt(partySize);

  while (remaingSeates > 0) {
    if (remaingSeates >= 3) {
      if (tablesCount[4].length) {
        bookingTables.push(tablesCount[4][0]);
        tablesCount[4].shift();
        remaingSeates = remaingSeates - 4;
      } else {
        bookingTables.push(tablesCount[2][0]);
        tablesCount[2].shift();
        remaingSeates = remaingSeates - 2;
      }
    } else {
      if (tablesCount[2].length) {
        bookingTables.push(tablesCount[2][0]);
        tablesCount[2].shift();
        remaingSeates = remaingSeates - 2;
      } else {
        bookingTables.push(tablesCount[4][0]);
        tablesCount[4].shift();
        remaingSeates = remaingSeates - 4;
      }
    }
  }

  const booking = await prisma.booking.create({
    data: {
      number_of_people: parseInt(partySize),
      booking_time: new Date(`${day}T${time}`),
      booker_email: bookerEmail,
      booker_phone: bookerPhone,
      booker_first_name: bookerFirstName,
      booker_last_name: bookerLastName,
      booker_occasion: bookerOccasion,
      booker_request: bookerRequest,
      restaurant_id: restaurant.id,
    },
  });

  const bookingTablesData = bookingTables.map((table_id) => {
    return {
      table_id,
      booking_id: booking.id,
    };
  });

  await prisma.bookingsOnTables.createMany({
    data: bookingTablesData,
  });

  return res.status(200).json(booking);
}
/* import { PrismaClient } from "@prisma/client";

import { findAvailabileTables } from "../../../../services/restaurant/findAvailableTables";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { slug, day, time, partySize } = req.query;

    const {
      bookerEmail,
      bookerPhone,
      bookerFirstName,
      bookerLastName,
      bookerOccasion,
      bookerRequest,
    } = req.body;

    const restaurant = await prisma.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        table: true,
        open_time: true,
        close_time: true,
        id: true,
      },
    });

    if (!restaurant) {
      return res.status(400).json({
        errorMessage: "Restaurant not found",
      });
    }

    if (
      new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
      new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
    ) {
      return res.status(400).json({
        errorMessage: "Restaurant is not open at that time",
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

    const searchTimeWithTables = searchTimesWithTables.find((t) => {
      return t.date.toISOString() === new Date(`${day}T${time}`).toISOString();
    });

    if (!searchTimeWithTables) {
      return res.status(400).json({
        errorMessage: "No availablity, cannot book",
      });
    }

    const tablesCount = {
      2: [],
      4: [],
    };

    searchTimeWithTables.tables.forEach((table) => {
      if (table.seats === 2) {
        tablesCount[2].push(table.id);
      } else {
        tablesCount[4].push(table.id);
      }
    });

    const tablesToBooks = [];
    let seatsRemaining = parseInt(partySize);

    while (seatsRemaining > 0) {
      if (seatsRemaining >= 3) {
        if (tablesCount[4].length) {
          tablesToBooks.push(tablesCount[4][0]);
          tablesCount[4].shift();
          seatsRemaining = seatsRemaining - 4;
        } else {
          tablesToBooks.push(tablesCount[2][0]);
          tablesCount[2].shift();
          seatsRemaining = seatsRemaining - 2;
        }
      } else {
        if (tablesCount[2].length) {
          tablesToBooks.push(tablesCount[2][0]);
          tablesCount[2].shift();
          seatsRemaining = seatsRemaining - 2;
        } else {
          tablesToBooks.push(tablesCount[4][0]);
          tablesCount[4].shift();
          seatsRemaining = seatsRemaining - 4;
        }
      }
    }

    const booking = await prisma.booking.create({
      data: {
        number_of_people: parseInt(partySize),
        booking_time: new Date(`${day}T${time}`),
        booker_email: bookerEmail,
        booker_phone: bookerPhone,
        booker_first_name: bookerFirstName,
        booker_last_name: bookerLastName,
        booker_occasion: bookerOccasion,
        booker_request: bookerRequest,
        restaurant_id: restaurant.id,
      },
    });

    const bookingsOnTablesData = tablesToBooks.map((table_id) => {
      return {
        table_id,
        booking_id: booking.id,
      };
    });

    await prisma.bookingsOnTables.createMany({
      data: bookingsOnTablesData,
    });

    return res.json(booking);
  }
}
 */
