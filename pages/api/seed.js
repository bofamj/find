// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import type { NextApiRequest, NextApiResponse } from "next";
import { PRICE, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
/* type Data = {
  name: string;
}; */

export default async function handler(req, res) {
  await prisma.BookingsOnTables.deleteMany();
  await prisma.Booking.deleteMany();
  await prisma.table.deleteMany();
  await prisma.review.deleteMany();
  await prisma.item.deleteMany();
  await prisma.restaurant.deleteMany();
  await prisma.location.deleteMany();
  await prisma.cuisine.deleteMany();
  await prisma.user.deleteMany();

  await prisma.location.createMany({
    data: [
      { name: "ottawa" },
      { name: "toronto" },
      { name: "niagara" },
      { name: "london" },
      { name: "paris" },
      { name: "istanbul" },
    ],
  });

  await prisma.cuisine.createMany({
    data: [
      { name: "indian" },
      { name: "italian" },
      { name: "mexican" },
      { name: "steakhouse" },
      { name: "libanaise" },
      { name: "french" },
      { name: "turkish " },
    ],
  });

  const locations = await prisma.location.findMany();
  const cuisines = await prisma.cuisine.findMany();

  const indianCuisineId =
    cuisines.find((cuisine) => cuisine.name === "indian")?.id || 1;
  const mexicanCuisineId =
    cuisines.find((cuisine) => cuisine.name === "mexican")?.id || 1;
  const italianCuisineId =
    cuisines.find((cuisine) => cuisine.name === "italian")?.id || 1;
  const steakhouseCuisineId =
    cuisines.find((cuisine) => cuisine.name === "steakhouse")?.id || 1;
  const libanaiseId =
    cuisines.find((cuisine) => cuisine.name === "libanaise")?.id || 1;
  const frenchId =
    cuisines.find((cuisine) => cuisine.name === "french")?.id || 1;
  const turkishId =
    cuisines.find((cuisine) => cuisine.name === "turkish ")?.id || 1;

  const ottawaLocationId =
    locations.find((location) => location.name === "ottawa")?.id || 1;
  const torontoLocationId =
    locations.find((location) => location.name === "toronto")?.id || 1;
  const niagaraLocationId =
    locations.find((location) => location.name === "niagara")?.id || 1;
  const londonLocationId =
    locations.find((location) => location.name === "london")?.id || 1;
  const parisId =
    locations.find((location) => location.name === "paris")?.id || 1;
  const istanbulId =
    locations.find((location) => location.name === "istanbul")?.id || 1;

  await prisma.restaurant.createMany({
    data: [
      //* istanbul *//
      {
        name: "Safran Restaurant",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/27658735.jpg",
        price: PRICE.REGULAR,
        description:
          "Only the internationally recognised and “Academie Internationale de la Gastronomie” awarded Safran offers the finest in Turkish and Ottoman cuisine and spectacular views of the Bosphorus. The covered terrace provides the opportunity to enjoy breathtaking panoramic views all year round in this elegant and sophisticated setting.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/5/26264406.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43601451.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/52188130.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/52188131.jpg",
        ],
        open_time: "13:30:00.000Z",
        close_time: "23:30:00.000Z",
        slug: "Safran-Restaurant",
        location_id: istanbulId,
        cuisine_id: turkishId,
      },
      {
        name: "KEBAPjI Etiler",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/46713580.png",
        price: PRICE.REGULAR,
        description:
          "Located at the busiest point on Nispetiye Street, KEBAPÇI offers diners a unique concept beyond that of a classic kebab restaurant. Using the finest meat and freshest ingredients, KEBAPÇI offers its guests traditional kebab dishes.Mr.Gökçe's (A.K.A Saltbae) expertise on meat allows KEBAPÇI to serve fresh and high-quality kebab dishes. KEBAPÇI stands out in both taste and presentation; its decoration and atmosphere provide a delightful dining experience the appetizers are just as impressive and delicious as the meat, with wonderful flavors that linger in dine",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/46713696.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/46713697.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/46713698.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/46713699.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/46713701.jpg",
        ],
        open_time: "13:30:00.000Z",
        close_time: "23:30:00.000Z",
        slug: "KEBAPjI-Etiler",
        location_id: istanbulId,
        cuisine_id: turkishId,
      },
      {
        name: "Fine Dine Istanbul",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/4/29263247.jpg",
        price: PRICE.REGULAR,
        description:
          "Fine Dine İstanbul, is a fine dining restaurant serving Istanbul cuisine under the influence of palace.We have a good variety of options for vegetarians",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/29144118.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/29144121.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/29144124.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/48015855.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/48015858.jpg",
        ],
        open_time: "13:30:00.000Z",
        close_time: "23:30:00.000Z",
        slug: "Fine-Dine-Istanbul",
        location_id: istanbulId,
        cuisine_id: turkishId,
      },
      {
        name: "City Lights Bar",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/4/26351055.jpg",
        price: PRICE.REGULAR,
        description:
          "With Istanbul at your feet, the City Lights Bar is the perfect spot to unwind while enjoying the finest wines, personalised cocktails, delicious appetisers and the most delectable of desserts. Immerse yourself in the energising nightlife of City Lights and be captivated by the rhythm of the music.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/42637927.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/42637928.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/42637929.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/42637930.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/48300406.jpg",
        ],
        open_time: "13:30:00.000Z",
        close_time: "23:30:00.000Z",
        slug: "City-Lights-Bar",
        location_id: istanbulId,
        cuisine_id: turkishId,
      },
      {
        name: "Restaurant Assanabel Republique",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/50154208.png",
        price: PRICE.REGULAR,
        description:
          "Assanabel offers you Lebanese gastronomic cuisine in the heart of Paris. We have been sharing our Lebanese know-how and savoir-vivre since 1988!",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/50154188.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/50154189.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/50154190.png",
          "	https://resizer.otstatic.com/v2/photos/xlarge/1/50154191.png",
          "	https://resizer.otstatic.com/v2/photos/xlarge/2/50154192.png",
        ],
        open_time: "13:30:00.000Z",
        close_time: "23:30:00.000Z",
        slug: "Restaurant-Assanabel-Republique",
        location_id: parisId,
        cuisine_id: libanaiseId,
      },
      {
        name: "Market by Jean-Georges",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/25731879.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Welcome to Market Restaurant, we look forward to serving you. We are a fashionable restaurant offering, Asian-French cuisine located on avenue Matignon, near the Champs-Elysées. Market was decorated by Christian Liaigre, with simple materials, including marble, wood, and leather. Chef Jean-Georges delivers inventive dishes unsing fresh market produce and original combinations of spices and seasonings.",
        images: [
          "	https://resizer.otstatic.com/v2/photos/xlarge/25808114.jpg",
          "	https://resizer.otstatic.com/v2/photos/xlarge/25870155.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25870156.jpg",
          "	https://resizer.otstatic.com/v2/photos/xlarge/25917334.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/26037452.jpg",
          "	https://resizer.otstatic.com/v2/photos/xlarge/26037456.jpg",
        ],
        open_time: "14:30:00.000Z",
        close_time: "21:30:00.000Z",
        slug: "Market-by-Jean-Georges",
        location_id: parisId,
        cuisine_id: frenchId,
      },

      {
        name: "DROUANT",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/40894510.jpg",
        price: PRICE.REGULAR,
        description: "",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/4/32244402.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/32244776.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/32244779.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/32244780.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/32244792.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/51200620.jpg",
        ],
        open_time: "14:30:00.000Z",
        close_time: "21:30:00.000Z",
        slug: "DROUANT",
        location_id: parisId,
        cuisine_id: frenchId,
      },
      {
        name: "Sacre Frenchy",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/50129332.jpg",
        price: PRICE.CHEAP,
        description:
          "Sacré Frenchy ! it s a french neo-brasserie in the center of Paris, next to Etienne Marcel, le Marais and near to Beaubourg Museum and les Halles. Our chief Paul is a former student of Ferrandi a famous gastronomy school in France. He use to work all around the world in differents Michelin* and he wanted to do in Paris a typical french bistronomie with us. So we welcome you with a typical and traditional menu with fresh food for lunch or diner.There is also vegan and gluten free menu.All meals are selected and provided by local producers and we have the ONU label 'Carbon Neutral Now' which means that we offset all our carbon emissions.It's important for us to eat well and save the planet.From thursday night till saturday night we also have our pianist Augustin who plays some french and international songs.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26481455.jpg",
          "	https://resizer.otstatic.com/v2/photos/xlarge/2/26481462.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26481463.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26481464.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/32136673.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/32136681.jpg",
        ],
        open_time: "14:30:00.000Z",
        close_time: "21:30:00.000Z",
        slug: "Sacre-Frenchy",
        location_id: parisId,
        cuisine_id: frenchId,
      },
      {
        name: "Tamara",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/50998949.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Tamara est le restaurant gastronimique du Chef Clément Vergeat. Situé entre Palais Royal et Opéra, Tamara propose un menu de dégustation (110 €) ainsi que des plats à la carte, accompagnant une selection éclectique de vins sélectionné avec passion et attention.Nous pouvons accomoder la plupart des restrictions alimentaires courante, nous vous prions de nous l'indiquer lors de votre réservation. Nous vous demandons de nous contacter par mail et téléphone pour les réservations de plus de 6 personnes.Lorsque nous sommes complet, ou pour découvrir une expérience différente, vous pouvez jeter un coup d'oeuil à Nellu, notre second endroit à Paris.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/50999022.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/50999026.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/50999027.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/50999028.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/50999029.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42348738.jpg",
        ],
        open_time: "14:30:00.000Z",
        close_time: "21:30:00.000Z",
        slug: "Tamara",
        location_id: parisId,
        cuisine_id: frenchId,
      },
      {
        name: "LEmpire du 8eme",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/48456739.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "UN LIEU ATYPIQUE De l’accueil, à la cuisine en passant par l'atmosphère du lieu, toutes les qualités de l’Empire du 8ème font de ce lieu celui de vos dîners d’affaires, autant que celui de vos repas entre amis ou en famille. À partir de 22h, vous serez embarqués dans une ambiance festive, menée par nos DJs et nos artistes.L'EMPIRE DU 8ème EN CUISINELa volonté du chef : puisque le plaisir des yeux est indissociable de la surprise des papilles, son savoir-faire sera votre découverte.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48456720.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48456721.jp",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48456723.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48456726.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48456727.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49816111.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/50074393.jpg",
        ],
        open_time: "14:30:00.000Z",
        close_time: "21:30:00.000Z",
        slug: "LEmpire-du-8eme",
        location_id: parisId,
        cuisine_id: frenchId,
      },

      //stack
      {
        name: "Heliot Steak House",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47932954.jpg",
        price: PRICE.CHEAP,
        description:
          "Heliot Steak House at the Hippodrome Casino, is only for those over 18, physical photo ID is required.Quite easily the restaurant with the best view in London – overlooking the main gaming floor – but with the added bonus of the capital’s best value USDA prime steak, Heliot Steak House has attracted rave reviews for its inspired menu which draws on the history of the Hippodrome.If steak isn’t your thing then don’t worry, as our chefs have created a menu that caters for every taste.Parties of 8 and above will be required to make a deposit of £10 per person to secure the booking and will be contacted by the team to secure this payment. Cancellation would need to be 24 hours prior to the booking time to be eligible for a refund for the deposit",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/28874218.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/28874219.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/28874220.jpg",
          "	https://resizer.otstatic.com/v2/photos/xlarge/1/28874221.jpg",
        ],
        open_time: "14:30:00.000Z",
        close_time: "21:30:00.000Z",
        slug: "Heliot-Steak-House",
        location_id: londonLocationId,
        cuisine_id: steakhouseCuisineId,
      },
      {
        name: "Amici Lounge Bar & Restaurant",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/47250450.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Atmospheric Argentinian Steak restaurant and cocktail bar in Soho, London. A place where you can enjoy a delicious steak, finest mixology cocktails or choose amongst a wide range of spirits at the bar.The perfect environment for an after-work dinner, relaxing evening with friends or a business meeting. Available for group bookings and private hire.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/47250469.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47250475.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47463107.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48590254.jpg",
        ],
        open_time: "13:30:00.000Z",
        close_time: "22:30:00.000Z",
        slug: "Amici-Lounge-Bar-Restaurant",
        location_id: londonLocationId,
        cuisine_id: steakhouseCuisineId,
      },
      {
        name: "Block Soho",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/52005952.jpg",
        price: PRICE.CHEAP,
        description:
          "Block Soho is a brand new chophouse and seafood restaurant offering food and drinks of exceptional quality, with a notable selection of fine whiskeys.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/52005965.jpg",
          "	https://resizer.otstatic.com/v2/photos/xlarge/3/49094112.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49094123.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49094135.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/52005953.jpg",
        ],
        open_time: "13:30:00.000Z",
        close_time: "23:00:00.000Z",
        slug: "Block-Soho",
        location_id: londonLocationId,
        cuisine_id: steakhouseCuisineId,
      },
      {
        name: "Gaucho Piccadilly",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/26085645.jpg",
        price: PRICE.REGULAR,
        description:
          "Gaucho Set Lunch Menu: 12–3PM | Two Courses - £24.50 | Three Courses - £27.50 | Monday- FridayPiccadilly is our flagship restaurant, set in a beautiful townhouse just off Regent Street, encompassing the ultimate Gaucho experience in the West End. Impeccable Argentinian steaks, flavours of Latin America and a perfectly curated drinks list are all enjoyed in uncompromised elegance in the former home of a Spanish Ambassador.This impressive restaurant boasts a variety of unique spaces that soar over three stories. At ground level, you have our warm and welcoming dining room with adjoining weather-proof terrace. As you ascend the original sweeping staircase, you’ll find another dining space with a spectacular open kitchen, where we host our legendary Electro brunch, as well as a myriad of gorgeous private rooms – one inspired by our former Spanish resident.Please note: we currently do not accept OpenTable dining cheques.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25198367.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25198368.jpg",
          "	https://resizer.otstatic.com/v2/photos/xlarge/1/25198369.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25198370.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25198371.jpg",
        ],
        open_time: "12:30:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "Gaucho-Piccadilly",
        location_id: londonLocationId,
        cuisine_id: steakhouseCuisineId,
      },
      {
        name: "Hawksmoor Air Street",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/24873709.jpg",
        price: PRICE.REGULAR,
        description:
          "The Hawksmoor Air Street menu is equally steak and seafood, receiving some of the freshest produce from Brixham Market & high standard UK beef, as well as cocktails made by award-winning bartenders.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25215878.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25222668.jpg",
          "	https://resizer.otstatic.com/v2/photos/xlarge/1/24873715.jpg",
          "	https://resizer.otstatic.com/v2/photos/xlarge/1/24873706.jpg",
        ],
        open_time: "13:00:00.000Z",
        close_time: "20:30:00.000Z",
        slug: "Hawksmoor-Air-Street",
        location_id: londonLocationId,
        cuisine_id: steakhouseCuisineId,
      },
      {
        name: "High Timber",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/23360658.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Relaxed wine dining next to the Thames. High Timber has a red meat orientated menu, 2 wine cellars with 40 000 bottles, and a cheese and biltong room with seasonal cheeses.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26264116.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29569087.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29569101.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32549004.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/42077539.jpg",
          "	https://resizer.otstatic.com/v2/photos/xlarge/1/48619468.jpg",
        ],
        open_time: "13:00:00.000Z",
        close_time: "20:30:00.000Z",
        slug: "High-Timber",
        location_id: londonLocationId,
        cuisine_id: steakhouseCuisineId,
      },
      // INDIAN //
      {
        name: "Vivaan - fine Indian",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/32109459.jpg",
        price: PRICE.REGULAR,
        description:
          "Vivaan is Modern Indian Cuisine serving dishes from different regions of India. We carefully select our ingredients and use them to make authentic Indian recipes and our chef puts his modern flair and twists to the dishes.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/32109461.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32459786.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484701.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484708.jpg",
        ],
        open_time: "14:30:00.000Z",
        close_time: "21:30:00.000Z",
        slug: "vivaan-fine-indian-cuisine-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "RamaKrishna Indian",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/47417441.jpg",
        price: PRICE.CHEAP,
        description:
          "With 20 years of experience cooking in the finest restaurants, our chef is excited to present their vision to you and all our guests. Our caring and committed staff will ensure you have a fantastic experience with us.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47417455.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47417456.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47417457.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47417458.jpg",
        ],
        open_time: "12:30:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "ramakrishna-indian-restaurant-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Coconut Lagoon",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/48545745.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "At Coconut Lagoon prepare yourselves for a most memorable journey through South Indian cuisine and feast on high quality food of inimitable flavour, aroma and originality in the vibrant setting of Coconut Lagoon.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30045353.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48545766.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30045356.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49399187.jpg",
        ],
        open_time: "17:30:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "coconut-lagoon-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Last Train to Delhi",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/26429498.jpg",
        price: PRICE.REGULAR,
        description:
          "Welcome to Last Train to Delhi. We are a progressive Indian restaurant in the beautiful Glebe community in Ottawa. Our speciality is Northern Indian food, classics like Murg Mahkini and some modern dishes like Crispy Shrimp. We are a small cozy restaurant, so make sure that you reserve through OpenTable.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29477326.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29777084.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32104059.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32104066.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "last-train-to-delhi-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Adrak Yorkville",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/4/47914200.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Namaste and welcome to Adrak - a place where food unites all. We take you through a journey of the past and present, as we hope to encourage thought-provoking conversations amid elevated Indian food.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/47914185.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/47914186.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47980632.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47980634.jpg",
        ],
        open_time: "16:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "adrak-yorkville-toronto",
        location_id: torontoLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Curryish Tavern",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49294128.jpg",
        price: PRICE.REGULAR,
        description:
          "The most unique Indian food in the world! We are inspired by the seasons of Ontario and the cooking techniques of the world. Regale in the imagination of Chef Miheer Shete's dishes and change your palate for life.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765139.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765149.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765157.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765162.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "curryish-tavern-toronto",
        location_id: torontoLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Utsav",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646742.jpg",
        price: PRICE.CHEAP,
        description:
          "Utsav is an ancient Sanskrit word meaning festival. An integral part of Indian culture, Indian festivals are innumerable and equally varied in origin from the Himalayan foothills to the Peninsula's tip and food plays a very prominent part of the festive events.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646742.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646761.jpg",
        ],
        open_time: "14:00:00.000Z",
        close_time: "19:00:00.000Z",
        slug: "utsav-toronto",
        location_id: torontoLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Pukka",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/25733300.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "At this refined, yet casual, Indian restaurant, the portions are large, the wine list is top-notch, and the ambience encourages sharing.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733294.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733295.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733296.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733297.jpg",
        ],
        open_time: "12:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "pukka-niagara",
        location_id: niagaraLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Kamasutra Indian",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25602522.jpg",
        price: PRICE.CHEAP,
        description:
          "This elegant fine dining Indian Restaurant has been satisfying the Indian tandoori and curry cravings for 12 years in Toronto.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/31854185.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/31854188.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25684161.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/26009011.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "kamasutra-indian-restaurant-and-wine-bar-niagara",
        location_id: niagaraLocationId,
        cuisine_id: indianCuisineId,
      },
      // MEXICAN //
      {
        name: "Eldorado Taco",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/42557297.jpg",
        price: PRICE.REGULAR,
        description:
          "Eldorado Taco restaurant is excited to serve you traditional Mexican cuisine, re-imagined with a distinct modern flair, in a stylish setting on Preston street. Striving to bring you some of Ottawa’s best Tacos, margaritas and Tequila. Reserve your table now!",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29501707.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29501713.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/29501715.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/42557295.jpg",
        ],
        open_time: "16:00:00.000Z",
        close_time: "19:00:00.000Z",
        slug: "eldorado-taco-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: mexicanCuisineId,
      },
      {
        name: "La Bartola",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/48981502.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "At La Bartola, we inspire a passion for authentic Mexican flavours. We use simple, fresh, and high-quality local & Mexican ingredients to craft delicious and thoughtful food.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981480.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981483.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981485.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981487.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981490.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981492.jpg",
        ],
        open_time: "12:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "la-bartola-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: mexicanCuisineId,
      },
      {
        name: "El Catrin",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/28028883.png",
        price: PRICE.CHEAP,
        description:
          "Reservations are booked for indoors only. Seating time will be limited to two hours maximum.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770621.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770622.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770624.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770625.jpg",
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "el-catrin-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: mexicanCuisineId,
      },
      {
        name: "3 Mariachis",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/32449465.jpg",
        price: PRICE.CHEAP,
        description:
          "Specializing in the preparation of high quality Mexican food. Our vibrant décor, carefully selected menu, great staff and exciting entertainment will ensure that you are treated to a unique dining experience.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32490939.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32490987.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32507838.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/41724689.jpg",
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "el-catrin-toronto",
        location_id: torontoLocationId,
        cuisine_id: mexicanCuisineId,
      },
      {
        name: "Casa Madera",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47744844.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "The first location in Canada, from famed restauranteurs Noble 33, welcomes patrons into an immersive dining experience.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745080.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745081.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745093.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745097.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745144.jpg",
        ],
        open_time: "15:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "casa-madera-toronto",
        location_id: torontoLocationId,
        cuisine_id: mexicanCuisineId,
      },
      {
        name: "Taco N Tequila",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47429858.jpg",
        price: PRICE.CHEAP,
        description:
          "As a family owned business, our goal is simple: to consistently deliver fresh and delicious Mexican flavours in a FUN and friendly atmosphere with the best service around!",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47600418.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429797.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429802.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745097.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429814.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "casa-madera-niagara",
        location_id: niagaraLocationId,
        cuisine_id: mexicanCuisineId,
      },
      {
        name: "El Jefe",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47710768.jpg",
        price: PRICE.CHEAP,
        description:
          "Lively cantina serving Mexican favorites & potent margaritas in a vibrant, airy space with murals.",
        images: [],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "el-jefe-niagara",
        location_id: niagaraLocationId,
        cuisine_id: mexicanCuisineId,
      },
      // ITALIAN //
      {
        name: "Cano Restaurant",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/43463549.jpg",
        price: PRICE.REGULAR,
        description:
          "Our back patio has now officially reopened for FOOD SERVICE only. Drinks can be ordered and consumed at the bar before, during, or after dinner service.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/43463554.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463742.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463745.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463748.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463750.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/43463751.jpg",
        ],
        open_time: "13:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "cano-restaurant-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "Blu Ristorante",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/47350167.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Victorian Building with two floors of dining space and large side and front patio. Tastefully designed to host your special event, romantic dinner, corporate buyout or a celebration of any sort.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305566.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305567.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305568.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305569.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305570.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30091570.jpg",
        ],
        open_time: "15:00:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "blu-ristorante-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "Stelvio",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/50557365.jpg",
        price: PRICE.REGULAR,
        description:
          "Stelvio on Dundas West is an authentic Italian restaurant serving classic old world fare using traditional recipes and ingredients. Recipes have been fine-tuned to satisfy the palate of the modern guest, and fresh meals are prepared daily.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/26374971.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26374974.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26374975.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26374976.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/50557389.jpg",
        ],
        open_time: "13:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "stelvio-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "Terroni Adelaide",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/46827195.jpg",
        price: PRICE.REGULAR,
        description:
          "Terroni Adelaide’s multi-level location is located in Toronto’s historic York County Court House circa 1853.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309468.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309469.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309470.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309472.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309474.png",
        ],
        open_time: "12:00:00.000Z",
        close_time: "18:00:00.000Z",
        slug: "terroni-adelaide-niagara",
        location_id: niagaraLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "EST Restaurant",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49169798.jpg",
        price: PRICE.CHEAP,
        description:
          "ēst is a modern, newly reopened restaurant serving Italian-French courses, captivating cocktails and wine.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49253937.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49253940.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49253941.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49415599.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49415604.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49696221.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49999039.jpg",
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "est-restaurant-niagara",
        location_id: niagaraLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "Sofia",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25558850.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Tapping into true Italian tastes, the menu starts with a selection of antipasti including a citrus salad and grilled octopus, and a plentiful selection of crudo. ",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/25629442.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25636273.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25679656.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25825772.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/26011606.jpg",
        ],
        open_time: "13:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "sofia-toronto",
        location_id: torontoLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "Terroni Sud Forno",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49463645.png",
        price: PRICE.REGULAR,
        description:
          "Spaccio West, near the Lower Junction on the West Toronto Railpath, acts as the backstage to the main show taking place at all Terroni locations.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741813.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741816.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741821.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741826.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741827.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "terroni-sud-forno-produzione-e-spaccio-toronto",
        location_id: torontoLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "il Padrino",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49616181.jpg",
        price: PRICE.CHEAP,
        description:
          "Welcome to the newest edition to College street iL PADRINO Ristorante has joined the list of Italian restaurants where Chef Connie award winning Italian Chef makes every Italian dish with love like no other. ",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49494556.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49494562.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49494563.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/49494887.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/49533502.jpg",
        ],
        open_time: "07:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "il-padrino-toronto",
        location_id: torontoLocationId,
        cuisine_id: italianCuisineId,
      },
    ],
  });

  const restaurants = await prisma.restaurant.findMany();

  const vivaanId =
    restaurants.find((restaurant) => restaurant.name === "Vivaan - fine Indian")
      ?.id || 1;
  const RamaKrishnaId =
    restaurants.find((restaurant) => restaurant.name === "RamaKrishna Indian")
      ?.id || 1;
  const coconutLagoonId =
    restaurants.find((restaurant) => restaurant.name === "Coconut Lagoon")
      ?.id || 1;
  const lastTrainToDelhiId =
    restaurants.find((restaurant) => restaurant.name === "Last Train to Delhi")
      ?.id || 1;
  const adrakYorkvilleId =
    restaurants.find((restaurant) => restaurant.name === "Adrak Yorkville")
      ?.id || 1;
  const curryishTavernId =
    restaurants.find((restaurant) => restaurant.name === "Curryish Tavern")
      ?.id || 1;
  const utsavId =
    restaurants.find((restaurant) => restaurant.name === "Utsav")?.id || 1;
  const pukkaId =
    restaurants.find((restaurant) => restaurant.name === "Pukka")?.id || 1;
  const kamasutraIndianId =
    restaurants.find((restaurant) => restaurant.name === "Kamasutra Indian")
      ?.id || 1;
  const eldoradoTacoId =
    restaurants.find((restaurant) => restaurant.name === "Eldorado Taco")?.id ||
    1;
  const laBartolaId =
    restaurants.find((restaurant) => restaurant.name === "La Bartola")?.id || 1;
  const elCatrinId =
    restaurants.find((restaurant) => restaurant.name === "El Catrin")?.id || 1;
  const mariachisId =
    restaurants.find((restaurant) => restaurant.name === "3 Mariachis")?.id ||
    1;
  const canoRestaurantId =
    restaurants.find((restaurant) => restaurant.name === "Cano Restaurant")
      ?.id || 1;
  const bluRistoranteId =
    restaurants.find((restaurant) => restaurant.name === "Blu Ristorante")
      ?.id || 1;
  const stelvioId =
    restaurants.find((restaurant) => restaurant.name === "Stelvio")?.id || 1;
  const sofiaId =
    restaurants.find((restaurant) => restaurant.name === "Sofia")?.id || 1;
  const heliotId =
    restaurants.find((restaurant) => restaurant.name === "Heliot Steak House")
      ?.id || 1;
  const amiciLoungeId =
    restaurants.find(
      (restaurant) => restaurant.name === "Amici Lounge Bar & Restaurant"
    )?.id || 1;
  const gauchoPiccadillyId =
    restaurants.find((restaurant) => restaurant.name === "Gaucho Piccadilly")
      ?.id || 1;
  const hawksmoorId =
    restaurants.find((restaurant) => restaurant.name === "Hawksmoor Air Street")
      ?.id || 1;
  const highTimberId =
    restaurants.find((restaurant) => restaurant.name === "High Timber")?.id ||
    1;
  const assanabelId =
    restaurants.find(
      (restaurant) => restaurant.name === "Restaurant Assanabel Republique"
    )?.id || 1;
  const JeanGeorgeId =
    restaurants.find(
      (restaurant) => restaurant.name === "Market by Jean-Georges"
    )?.id || 1;
  const SacréId =
    restaurants.find((restaurant) => restaurant.name === "Sacre Frenchy")?.id ||
    1;
  const tamaraId =
    restaurants.find((restaurant) => restaurant.name === "Tamara")?.id || 1;
  const lEmpireId =
    restaurants.find((restaurant) => restaurant.name === "LEmpire du 8eme")
      ?.id || 1;
  const kEBAPjIId =
    restaurants.find((restaurant) => restaurant.name === "KEBAPjI Etiler")
      ?.id || 1;
  const fineDineId =
    restaurants.find((restaurant) => restaurant.name === "Fine Dine Istanbul")
      ?.id || 1;
  const safranId =
    restaurants.find((restaurant) => restaurant.name === "Safran Restaurant")
      ?.id || 1;
  const cityLightsId =
    restaurants.find((restaurant) => restaurant.name === "City Lights Bar")
      ?.id || 1;
  const drouantId =
    restaurants.find((restaurant) => restaurant.name === "DROUANT")?.id || 1;
  const blockId =
    restaurants.find((restaurant) => restaurant.name === "Block Soho")?.id || 1;
  const casaId =
    restaurants.find((restaurant) => restaurant.name === "Casa Madera")?.id ||
    1;
  const tacoId =
    restaurants.find((restaurant) => restaurant.name === "Taco N Tequila")
      ?.id || 1;
  const jefeId =
    restaurants.find((restaurant) => restaurant.name === "El Jefe")?.id || 1;
  const terroniId =
    restaurants.find((restaurant) => restaurant.name === "Terroni Adelaide")
      ?.id || 1;
  const estId =
    restaurants.find((restaurant) => restaurant.name === "EST Restaurant")
      ?.id || 1;
  const terroniSudId =
    restaurants.find((restaurant) => restaurant.name === "Terroni Sud Forno")
      ?.id || 1;
  const ilPadrinoId =
    restaurants.find((restaurant) => restaurant.name === "il Padrino")?.id || 1;

  await prisma.item.createMany({
    data: [
      //*new 03 *//
      {
        name: "Ayva Tatlısı",
        description: "Ayva Tatlısı",
        price: "₺60.00",
        restaurant_id: kEBAPjIId,
      },
      //** 2  *//
      {
        name: "Durum Beyti Kebap",
        description:
          "Kuzu kıyma ile birlikte çekilmiş kırmızı biber, yeşil sivri biber, sarımsak ve maydanoz, lavaş ekmeğine sarılı",
        price: "₺100.00",
        restaurant_id: kEBAPjIId,
      },
      //** 3  *//
      {
        name: "KEBAPjI Tava",
        description:
          "Terbiyeli leblebi, közlenmiş arpacık soğan, diş sarımsak, kırmızı biber, sivri biber, patlıcan ve domates",
        price: "₺165.00",
        restaurant_id: kEBAPjIId,
      },
      //** 4  *//
      {
        name: "Kilis Ali Nazik",
        description:
          "Kuşbaşı kuzu eti, közlenmiş patlıcan, domates ve ezilmiş sarımsak",
        price: "₺130.00",
        restaurant_id: kEBAPjIId,
      },
      //* second*//
      //** 1 *//
      {
        name: "Manti",
        description: "Traditional Turkish Style Ravioli w/ yogurt sauce",
        price: "₺130.00",
        restaurant_id: fineDineId,
      },
      //** 2 *//
      {
        name: "Izgara Kofte",
        description: "Grilled meatballs with seasonal veggies and salsa",
        price: "₺230.00",
        restaurant_id: fineDineId,
      },
      //** 3 *//
      {
        name: "Istanbul Burger",
        description: "Artisan Cheeseburger w/ french fries and coleslaw salad",
        price: "₺170.00",
        restaurant_id: fineDineId,
      },
      //** 4 *//
      {
        name: "Fine Dine Istanbul Steak",
        description:
          "Izgara Bonfile, ev yapimi dömi glas sos ve yabani mantar ile [Grilled Fillet Mignon, w/ homemade demi glace sauce and wild mushrooms]",
        price: "₺270.00",
        restaurant_id: fineDineId,
      },
      //** 5 *//
      {
        name: "Kuzu Pirzola",
        description:
          "3 kalem pirzola, zerdeçallı püre ve mevsim yeşillikleri ile [Grilled lamb chop w/ turmeric poptato puree and seasonal greens]",
        price: "₺210.00",
        restaurant_id: fineDineId,
      },

      //* new 02 *//
      {
        name: "MEZZÉS POUR 1 PERSONNE",
        description: "Assiette composée de mezzés froids et chauds",
        price: "€27",
        restaurant_id: assanabelId,
      },
      {
        name: "MEZZÉS POUR 2 PERSONNES",
        description:
          "Assiette composée de mezzés froids et chaudsSuggestion du chef /7 mezzés à choisir",
        price: "€27",
        restaurant_id: assanabelId,
      },
      {
        name: "MEZZÉS POUR 4 PERSONNES",
        description: "Suggestion du chef /12 plats à choisir",
        price: "€27",
        restaurant_id: assanabelId,
      },
      {
        name: "HOMMOS LAHMÉ",
        description: "Purée de pois chiche, huile de sésame, émincé de veau",
        price: "€11",
        restaurant_id: assanabelId,
      },
      {
        name: "KEBBE KRASS",
        description:
          "Coques de blé concassé farcies de viande hachée, noix et pignons de pin",
        price: "€9",
        restaurant_id: assanabelId,
      },
      {
        name: "FATTETE ASSANABEL",
        description: "Spécialité maison: aubergine, pain, yaourt, viande",
        price: "€10",
        restaurant_id: assanabelId,
      },

      //**  2 **//
      {
        name: "À Partager",
        description: "ip Aux Pignons de Pain, Citron et Harissa, Pain Pita",
        price: "€19.00",
        restaurant_id: JeanGeorgeId,
      },
      {
        name: "Raw Bar",
        description:
          "Tartare de Thon, Avocat, Radis Épicés, Marinade de Gingembre",
        price: "€27.00",
        restaurant_id: JeanGeorgeId,
      },
      {
        name: "Entrees",
        description:
          "Slow Baked Salmon, Mash Potatoes, Brussels Sprouts, Truffle Vinaigrette",
        price: "€36.00",
        restaurant_id: JeanGeorgeId,
      },
      {
        name: "Entrees",
        description:
          "Slow Baked Salmon, Mash Potatoes, Brussels Sprouts, Truffle Vinaigrette",
        price: "€36.00",
        restaurant_id: JeanGeorgeId,
      },
      {
        name: "Appetizer",
        description: "Black Truffle and Fontina Cheese Pizza",
        price: "€34.00",
        restaurant_id: JeanGeorgeId,
      },
      //* 3 *//
      {
        name: "Pâtes Monseigneur des Enfants Gâtés*",
        description:
          "Coquillettes françaises BIO accompagnées d'une crème champignon à la truffe, de jambon de Paris et de copeaux de Comté AOP",
        price: "€18.50",
        restaurant_id: SacréId,
      },
      {
        name: "Souris d'Agneau Confite et Jus au Romarin*",
        description:
          "Accompagnée d'une purée de pomme de terre maison et d'une compotée d'oignons",
        price: "€29.00",
        restaurant_id: SacréId,
      },
      {
        name: "Lasagnes Végétarienne*",
        description: "Aux épinards et à la ricotta",
        price: "€18.50",
        restaurant_id: SacréId,
      },
      {
        name: "Queue de Lotte du Chef",
        description:
          "Accompagnée de légumes de saison et d'une crème de chorizo",
        price: "€36.00",
        restaurant_id: SacréId,
      },
      {
        name: "Onglet de Bœuf (250g) de Notre Boucher*",
        description: "Accompagné d'une sauce au poivre, frites et salade",
        price: "€28.00",
        restaurant_id: SacréId,
      },
      {
        name: "Tartare de Boeuf Charolais*",
        description: "Accompagné de frites maison et salade",
        price: "€19.50",
        restaurant_id: SacréId,
      },
      //* 4 *//
      {
        name: "Langoustine/ Squid Lardo/ Iodium",
        description: "Langoustine/ Squid Lardo/ Iodium",
        price: "€31.50",
        restaurant_id: tamaraId,
      },
      {
        name: "Asparagus/ Ramson/ Yeast ",
        description: "Asparagus/ Ramson/ Yeast ",
        price: "€27.00",
        restaurant_id: tamaraId,
      },
      {
        name: "Monkfish/ Carrot/ Sea buckthorn  ",
        description: "Monkfish/ Carrot/ Sea buckthorn  ",
        price: "€57.00",
        restaurant_id: tamaraId,
      },
      {
        name: "Beef/ Celery/ Clam  ",
        description: "Beef/ Celery/ Clam  ",
        price: "€67.00",
        restaurant_id: tamaraId,
      },
      {
        name: "Wine Pairing   ",
        description: "Wine Pairing   ",
        price: "€65.00",
        restaurant_id: tamaraId,
      },
      {
        name: "Soft Pairing",
        description: "Soft Pairing",
        price: "€55.00",
        restaurant_id: tamaraId,
      },
      //* 5 *//
      {
        name: "Duck breast from Landes with honey sauce",
        description: "Duck breast from Landes with honey sauce",
        price: "€28.00",
        restaurant_id: lEmpireId,
      },
      {
        name: "Spice-rubbed grilled lamb chops",
        description: "Spice-rubbed grilled lamb chops",
        price: "€34.00",
        restaurant_id: lEmpireId,
      },
      {
        name: "Beef filet with pepper sauce",
        description: "Beef filet with pepper sauce",
        price: "€44.00",
        restaurant_id: lEmpireId,
      },
      {
        name: "One-sided cooked sea bass filet",
        description: "One-sided cooked sea bass filet",
        price: "€32.00",
        restaurant_id: lEmpireId,
      },
      {
        name: "Grilled sole in brown butter and lemon sauce",
        description: "Grilled sole in brown butter and lemon sauce",
        price: "€65.00",
        restaurant_id: lEmpireId,
      },
      {
        name: "Empire burger",
        description: "Empire burger",
        price: "€28.00",
        restaurant_id: lEmpireId,
      },
      {
        name: "Truffle linguine",
        description: "Truffle linguine",
        price: "€38.00",
        restaurant_id: lEmpireId,
      },

      //* end new 02 *//
      //*  new 01*//
      {
        name: "The Ocean Plate",
        description:
          "Tuna sashimi, salmon sashimi, hamachi, sushi roll, cucumber, ginger & wasabi. (376 cal)",
        price: "£20.00",
        restaurant_id: heliotId,
      },
      {
        name: "Fillet",
        description: "225g",
        price: "£44.00",
        restaurant_id: heliotId,
      },
      {
        name: "Grilled Octopus",
        description: "roast potatoes & tarama",
        price: "£13.00",
        restaurant_id: heliotId,
      },
      {
        name: "Sirloin",
        description: "300g",
        price: "£32.00",
        restaurant_id: heliotId,
      },
      {
        name: "Rib Eye",
        description: "355g",
        price: "£40.00",
        restaurant_id: heliotId,
      },
      {
        name: "Scallops",
        description: "crispy kale, green apple & wasabi puree",
        price: "£15.00",
        restaurant_id: heliotId,
      },
      {
        name: "Dry Aged Rib on The Bone",
        description: "600g",
        price: "£72.00",
        restaurant_id: heliotId,
      },

      {
        name: "Sirloin",
        description: "Baby Portion Sirloin Half Portion",
        price: "£24.00",
        restaurant_id: amiciLoungeId,
      },
      {
        name: "Ribeye",
        description: "Ribeye",
        price: "£26.90",
        restaurant_id: amiciLoungeId,
      },
      {
        name: "Rump",
        description: "Baby Portion Rump Half Portion",
        price: "£18.90",
        restaurant_id: amiciLoungeId,
      },
      {
        name: "Lamb Chops",
        description: "served with a side of chips or baked potato",
        price: "£22.90",
        restaurant_id: amiciLoungeId,
      },

      {
        name: "Sirloin",
        description: "served with a side of chips or baked potato",
        price: "£24.90",
        restaurant_id: gauchoPiccadillyId,
      },
      {
        name: "Ribeye",
        description: "served with a side of chips or baked potato",
        price: "£26.90",
        restaurant_id: gauchoPiccadillyId,
      },
      {
        name: "Rump",
        description: "served with a side of chips or baked potato",
        price: "£18.90",
        restaurant_id: gauchoPiccadillyId,
      },

      {
        name: "Chateaubriand",
        description: "300g",
        price: "£44.90",
        restaurant_id: hawksmoorId,
      },
      {
        name: "Bone-In Prime Rib",
        description: "100g",
        price: "£14.90",
        restaurant_id: hawksmoorId,
      },
      {
        name: "Porterhouse",
        description: "100g",
        price: "£14.90",
        restaurant_id: hawksmoorId,
      },
      {
        name: "Porterhouse",
        description: "600g",
        price: "£90.00",
        restaurant_id: hawksmoorId,
      },
      {
        name: "Rib-Eye",
        description: "400g",
        price: "£42.00",
        restaurant_id: hawksmoorId,
      },
      {
        name: "Sirloin",
        description: "400g",
        price: "£39.50",
        restaurant_id: hawksmoorId,
      },
      {
        name: "Rump",
        description: "300g",
        price: "£29.00",
        restaurant_id: hawksmoorId,
      },

      {
        name: "Ribeye",
        description: "200g",
        price: "£26.50",
        restaurant_id: highTimberId,
      },
      {
        name: "Ribeye",
        description: "250g",
        price: "£34.50",
        restaurant_id: highTimberId,
      },
      {
        name: "Ribeye",
        description: "350g",
        price: "£49.50",
        restaurant_id: highTimberId,
      },
      {
        name: "Ribeye",
        description: "500g",
        price: "£69.50",
        restaurant_id: highTimberId,
      },
      {
        name: "Fillet",
        description: "200g",
        price: "£35.00",
        restaurant_id: highTimberId,
      },
      {
        name: "Fillet",
        description: "250g",
        price: "£43.70",
        restaurant_id: highTimberId,
      },
      {
        name: "Sirloin",
        description: "250g",
        price: "£28.70",
        restaurant_id: highTimberId,
      },
      {
        name: "Sirloin",
        description: "350g",
        price: "£38.70",
        restaurant_id: highTimberId,
      },
      {
        name: "Sirloin",
        description: "50g",
        price: "£58.70",
        restaurant_id: highTimberId,
      },
      //* end of new*//
      {
        name: "Ghee roast chicken wings",
        description:
          "Crispy chicken wings coated in a sauce made from roasted whole spices and clarified butter.",
        price: "$18.00",
        restaurant_id: vivaanId,
      },
      {
        name: "Sol Kadhi scallop ceviche",
        description: "Cured scallop served with mangosteen and coconut broth",
        price: "$18.00",
        restaurant_id: vivaanId,
      },
      {
        name: "Butte ka kees",
        description:
          "Bhutte( Corn) Khees( grated) and spiced and tempered served with waffers",
        price: "$17.00",
        restaurant_id: vivaanId,
      },
      {
        name: "Burrata Paapdi Chaat",
        description:
          "Our house made paapdi served with spiced potatoes and burrata cheese dressed with in house chutneys",
        price: "$16.00",
        restaurant_id: vivaanId,
      },
      {
        name: "Shaadi Waala Chicken Curry",
        description:
          "Chicken curry usually served in weddings back home (Must Try)",
        price: "$26.00",
        restaurant_id: vivaanId,
      },
      {
        name: "Shahi Tukda",
        description:
          "Chef’s signature dessert : crispy bread poched with flavoured milk and topped with homemade cream made of pistachios, rose.",
        price: "$11.00",
        restaurant_id: vivaanId,
      },
      {
        name: "Four-In-One Chicken",
        description:
          "Boneless chicken breast pieces marinated with four different kind of texture and Indian spices for each piece and grilled in clay oven",
        price: "$16.99",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Chicken Tikka",
        description:
          "Boneless Chicken marinated overnight with yogurt, Indian spices and cooked in a Tandoor oven",
        price: "$16.99",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Paneer Tikka",
        description:
          "Tandoori Paneer Tikka is made from homemade cottage cheese which is marinated in yogurt and dry aromatic Indian spices along with diced onions and capsicum and grilled in clay oven",
        price: "$16.99",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Fish Tikka",
        description:
          "Deboned fish marinated in ginger, garlic and other spices and grilled in clay oven",
        price: "$16.99",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Prawn Tandoori",
        description:
          "Large juicy prawn marinated in ginger, garlic, fresh squeezed lemon juice and along with various dry spices and grilled in clay oven",
        price: "$19.49",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Mixed Grill",
        description:
          "Tandoori chicken, lamb tikka, chicken tikka and fish grilled in our clay oven",
        price: "$20.99",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Coconut Curry",
        description:
          "Choice of boneless chicken breast, lamb, beef, fish or shrimp cooked in a creamy coconut, butter and onion sauce",
        price: "15.99",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Quilon Chicken",
        description:
          "free range grass fed chicken cooked in a tangy tomato masala",
        price: "$25.00",
        restaurant_id: coconutLagoonId,
      },
      {
        name: "Mariposa's Duck Biryani**",
        description: "slow baked in kiama rice, quail egg and raita",
        price: "$26.00",
        restaurant_id: coconutLagoonId,
      },
      {
        name: "Pala Lamb Peralan",
        description: "tender morsels of lamb in an exotic masala",
        price: "$26.00",
        restaurant_id: coconutLagoonId,
      },
      {
        name: "Roasted Salmon In Moilee Sauce",
        description: "marinated in green mango, spices and roasted",
        price: "$27.00",
        restaurant_id: coconutLagoonId,
      },
      {
        name: "Vegetable Aviyal",
        description:
          "assorted vegetables cooked in yoghurt, coconut spiked with cumin",
        price: "$22.00",
        restaurant_id: coconutLagoonId,
      },
      {
        name: "Aloo Tiki",
        description:
          "Potato croquette topped with pickled seasonal vegetables and an assortment of chutneys",
        price: "$12.00",
        restaurant_id: lastTrainToDelhiId,
      },
      {
        name: "Spicy Lamb Chops",
        description:
          "Lamb chops are coated in a spicy marinade and seared. It's paired with mint chutney, mango chutney, and raita. Allergens: Meat",
        price: "16.00",
        restaurant_id: lastTrainToDelhiId,
      },
      {
        name: "Crispy Shrimp",
        description:
          "Tandoori shrimp wrapped in crispy potato accompanied by a seasonal chutney and micro greens from the garden",
        price: "$15.00",
        restaurant_id: lastTrainToDelhiId,
      },
      {
        name: "Bhaingan Bharta",
        description: "Smokey eggplant and peas",
        price: "$17.00",
        restaurant_id: lastTrainToDelhiId,
      },
      {
        name: "Kofta Curry",
        description:
          "Indian kofta served with bottleneck gourds and potatoes in a cashew coconut sauce",
        price: "$20.00",
        restaurant_id: lastTrainToDelhiId,
      },
      {
        name: "murgh salaad",
        description: "Chicken breast, mix greens, mint vinegar dressing",
        price: "$18.00",
        restaurant_id: adrakYorkvilleId,
      },
      {
        name: "papad ki tokri",
        description: "Papadams, assorted chutneys & salsa",
        price: "$18.00",
        restaurant_id: adrakYorkvilleId,
      },
      {
        name: "khumb korma",
        description:
          "Aged basmati rice, marinated lamb & puff pastry cover, garlic yogurt",
        price: "$36.00",
        restaurant_id: adrakYorkvilleId,
      },
      {
        name: "dal tadka",
        description: "Yellow lentils, indian tempering",
        price: "$20.00",
        restaurant_id: adrakYorkvilleId,
      },
      {
        name: "cocochoco rasmalai cheese cake",
        description:
          "Coconut crémeux, chocolate hazelnut crunch, coconut snow, citrus gel, cardamom ice cream",
        price: "$19.00",
        restaurant_id: adrakYorkvilleId,
      },
      {
        name: "Molasses Braised Beef Cheeks Curry",
        description:
          "Caramelised root vegetables, deggi mirch, buttermilk onion rings",
        price: "$32.00",
        restaurant_id: curryishTavernId,
      },
      {
        name: "Coconut Vatan Stuffed Whole Branzino",
        description: "Turmeric lemon butter sauce, curry leaves, mustard seeds",
        price: "$39.00",
        restaurant_id: curryishTavernId,
      },
      {
        name: "Goan Chorizo + Braised Pork Shoulder Curry",
        description:
          "Double smoked bacon, roasted parsnips, red kidney beans, apple achar",
        price: "$31.00",
        restaurant_id: curryishTavernId,
      },
      {
        name: "Screech Rum Soaked Gulab Jamun",
        description: "Whipped mascarpone cream, pistachio crumble",
        price: "$14.00",
        restaurant_id: curryishTavernId,
      },
      {
        name: "Ontario Apple + Almond Halwa Tart",
        description: "Whipped cinnamon malai, red currants",
        price: "$14.00",
        restaurant_id: curryishTavernId,
      },
      {
        name: "Vegetable samosa",
        description: "Seasoned potatoes and peas wrapped in a light pastry",
        price: "$4.00",
        restaurant_id: utsavId,
      },
      {
        name: "Goan fish curry",
        description:
          "Filet of salmon cooked in a traditional hot and tangy coconut curry",
        price: "$15.00",
        restaurant_id: utsavId,
      },
      {
        name: "Lamb vindaloo",
        description:
          "A delicacy from Goa - Boneless lamb cooked in a hot, spicy and tangy sauce with potatoes",
        price: "$14.00",
        restaurant_id: utsavId,
      },
      {
        name: "Matar paneer",
        description:
          "Cottage cheese and green peas cooked in butter flavored onion and tomato gravy",
        price: "$10.00",
        restaurant_id: utsavId,
      },
      {
        name: "Chicken vindaloo",
        description:
          "Chicken cooked with herbs and spices in special hot spicy and tangy sauce with potatoes",
        price: "$14.00",
        restaurant_id: utsavId,
      },
      {
        name: "Chicken jalfrezi",
        description:
          "Chicken cooked with delicious mix of green peppers, onions, green chillies and tomatoes",
        price: "$14.00",
        restaurant_id: utsavId,
      },
      {
        name: "Lamb Lollipops",
        description: "grilled chops with turmeric, mint and fenugreek curry",
        price: "$44.00",
        restaurant_id: pukkaId,
      },
      {
        name: "Vegan Tikka Masala",
        description: "tofu, sweet peppers, red onion, tomato and cashew cream",
        price: "$23.00",
        restaurant_id: pukkaId,
      },
      {
        name: "Short Ribs",
        description:
          "PEI beef braised with black cumin, cloves, cardamom and fennel seeds",
        price: "$32.00",
        restaurant_id: pukkaId,
      },
      {
        name: "Punjabi Chicken Curry",
        description: "spicy home-style chicken curry",
        price: "$24.00",
        restaurant_id: pukkaId,
      },
      {
        name: "Pukka Chaat",
        description:
          "string vegetables, sprouts, rice crisps, pomegranate, mango, green apple, chutneys and yoghurt",
        price: "$16.00",
        restaurant_id: pukkaId,
      },
      {
        name: "Chicken Tikka",
        description:
          "herb-infused white meat, tandoor roasted and served with tamarind chutney",
        price: "$21.00",
        restaurant_id: pukkaId,
      },
      {
        name: "Butter Chicken Poutine",
        description:
          "Fries are served topped with melting cheese and butter chicken gravy",
        price: "$8.99",
        restaurant_id: kamasutraIndianId,
      },
      {
        name: "Vegetable Appy Platter",
        description:
          "2 Vegetable samosas, vegetable pakora, paneer pakora, 1 papadum, served with chickpea curry",
        price: "$13.99",
        restaurant_id: kamasutraIndianId,
      },
      {
        name: "Pulled Chicken",
        description: "marinated chicken with salsa",
        price: "12.00",
        restaurant_id: eldoradoTacoId,
      },
      {
        name: "Fettuccine Pescatore",
        description: "Scallops, mussels, shrimp and crab meat in a rose sauce",
        price: "$33.00",
        restaurant_id: laBartolaId,
      },
      {
        name: "Colosseo Pizze",
        description:
          "Luciano's spicy Italian sausage, black olives, hot peppers, mozzarella and parmigiano cheeses",
        price: "$22.00",
        restaurant_id: laBartolaId,
      },
      {
        name: "Vitello alla Griglia",
        description:
          "Grilled veal medallion, with seasonal vegetables and potatoes",
        price: "$35.00",
        restaurant_id: laBartolaId,
      },
      {
        name: "Agnello",
        description:
          "Grilled lamb chops in a citrus marinade, with seasonal vegetables and potatoes",
        price: "$35.00",
        restaurant_id: laBartolaId,
      },
      {
        name: "Orata ai Porri",
        description: "$32.00",
        price:
          "Pan seared sea bream filet with sautéed leeks, served over a wild rice medley and greens",
        restaurant_id: laBartolaId,
      },
      {
        name: "Insalata di Mare",
        description:
          "Mixed greens tossed in our house viniagriette, topped with grilled shrimp and crab meat",
        price: "$25.00",
        restaurant_id: laBartolaId,
      },
      {
        name: "PASTOR",
        description:
          "Marinated shaved pork, pineapple, red onion dice, cilantro, salsa verde, corn tortilla",
        price: "$23.00",
        restaurant_id: elCatrinId,
      },
      {
        name: "COCHINITA PIBIL",
        description:
          "Achiote rubbed pork, black bean puree, pickled red onion, cilantro, habanero salsa",
        price: "$23.00",
        restaurant_id: elCatrinId,
      },
      {
        name: "Seafood Molcajete",
        description: "Grilled calamari, morita garlic shrimp, octopus",
        price: "$23.00",
        restaurant_id: mariachisId,
      },
      {
        name: "Sirloin Steak & Tuetano Osso Buco",
        description:
          "Bone marrow, slow cooked in the oven, topped with our seasoning",
        price: "$26.00",
        restaurant_id: mariachisId,
      },
      {
        name: "Fajitas",
        description:
          "A sizzling bed of onions and bell peppers topped with your choice of protein",
        price: "$17.50",
        restaurant_id: mariachisId,
      },
      {
        name: "Hamachi",
        description:
          "Ponzu à la truffe, truffe noire râpée [Salmon Tataki, Truffle ponzu, Shaved black truffle]",
        price: "$24.00",
        restaurant_id: canoRestaurantId,
      },
      {
        name: "Tartare de Thon",
        description:
          "Soja Yuzu, piment serrano [Hot Hamachi, Yuzu soy, Serrano pepper]",
        price: "$24.00",
        restaurant_id: canoRestaurantId,
      },
      {
        name: "Tataki de Saumon",
        description:
          "Purée d'avocat, chili soja [Tuna Tartar, Avocado puree, Chili soy]",
        price: "$27.00",
        restaurant_id: canoRestaurantId,
      },
      {
        name: "Tomato Braised Beef Cheek Ragu",
        description:
          "Wild Mushrooms, Sweet Potato & Ricotta Gnocchi, Fresh Basil",
        price: "$29.00",
        restaurant_id: bluRistoranteId,
      },
      {
        name: "Roasted Butternut Squash Ravioli",
        description:
          "Gorgonzola, Balsamic Reduction, Brown Butter, Crispy Sage",
        price: "$33.00",
        restaurant_id: bluRistoranteId,
      },
      {
        name: "Pan Seared Atlantic Salmon",
        description:
          "Heirloom Carrots, Green Beans, Parsnip Puree, Beluga Lentils & Barley, Chive Oil",
        price: "$33.00",
        restaurant_id: bluRistoranteId,
      },
      {
        name: "Woodfire Grilled 12oz AAA Ribeye",
        description:
          "Heirloom Carrots, Green Beans, Sweet Potato Gratin, Mushroom Veal jus",
        price: "$55.00",
        restaurant_id: bluRistoranteId,
      },
      {
        name: "Pizzoccheri di Teglio",
        description:
          "Homemade short buckwheat Pasta coated in three-cheese sauce, savoy cabbage, potatoes, butter and sage",
        price: "$24.00",
        restaurant_id: stelvioId,
      },
      {
        name: "Gnocchi al Gorgonzola",
        description: "Fresh homemade Gnocchi served in a blue cheese sauce",
        price: "$23.00",
        restaurant_id: stelvioId,
      },
      {
        name: "Risotto ai Funghi",
        description: "Aironi Carnaroli risotto served with mushrooms",
        price: "$26.00",
        restaurant_id: stelvioId,
      },
      {
        name: "Spezzatino con Polenta",
        description:
          "Traditional Northern Italian Specialty. Slow-cooked feef stew, cooked in tomato sauce and red wine reduction, served over soft polenta",
        price: "$26.00",
        restaurant_id: stelvioId,
      },
    ],
  });

  const userLaith = await prisma.user.create({
    data: {
      first_name: "Laith",
      last_name: "Harb",
      email: "laith@hotmail.com",
      city: "ottawa",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  const userJosh = await prisma.user.create({
    data: {
      first_name: "Josh",
      last_name: "Allen",
      email: "josh@hotmail.com",
      city: "toronto",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  const userLebron = await prisma.user.create({
    data: {
      first_name: "LeBron",
      last_name: "James",
      email: "lebron@hotmail.com",
      city: "niagara",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  const userCassidy = await prisma.user.create({
    data: {
      first_name: "Cassidy",
      last_name: "Marksom",
      email: "cassidy@hotmail.com",
      city: "toronto",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  await prisma.review.createMany({
    data: [
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
        rating: 5,
        restaurant_id: vivaanId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "This food is so good! It is the fanciest thing I have ever seen in my short life",
        rating: 5,
        restaurant_id: bluRistoranteId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Excellent food and service. Busy night, but everything was great! Highly recommend.",
        rating: 5,
        restaurant_id: elCatrinId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Very nice place for a date night, the service was fast and friendly. The food was amazing.",
        rating: 4,
        restaurant_id: stelvioId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Extremely disappointing in our experience.",
        rating: 2,
        restaurant_id: laBartolaId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
        rating: 5,
        restaurant_id: elCatrinId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "As always, food was excellent. Waitress was friendly and prompt. We had just one problem in that our dessert order went rogue in the system and we waited ages for it to arrive.",
        rating: 5,
        restaurant_id: kamasutraIndianId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Restaurant was loud and crowded. Food is not worth the price.",
        rating: 3,
        restaurant_id: eldoradoTacoId,
        user_id: userLaith.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "A Christmas lunch with clients served by a friendly server with a good wine selection everyone enjoyed the appetizers and meals",
        rating: 4,
        restaurant_id: vivaanId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "The food was very tasty, the price is a little high so a place to go only for special occasions",
        rating: 5,
        restaurant_id: sofiaId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "Had a great time at Chops. Our server Dane was super friendly. Dinner was delicious as always.",
        rating: 3,
        restaurant_id: curryishTavernId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "The service was poor as we had to wait a long time for our food. There were some issues but were dealt with in a proper manner.",
        rating: 3,
        restaurant_id: adrakYorkvilleId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "Wonderful food and service.",
        rating: 5,
        restaurant_id: coconutLagoonId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "Great food, great staff. You can’t ask for much more from a restaurant.",
        rating: 5,
        restaurant_id: bluRistoranteId,
        user_id: userJosh.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Wonderful service! Delicious food! Comfortable seating and luxurious atmosphere.",
        rating: 5,
        restaurant_id: RamaKrishnaId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Prime rib and filet were made spot on. Vegetable sides were made well as was the shrimp and scallops.",
        rating: 4,
        restaurant_id: lastTrainToDelhiId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "This visit was with a friend who had never been here before. She loved it as much as I do. She said it will be our new go to place!",
        rating: 4,
        restaurant_id: curryishTavernId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Had a full 3 course meal in the mid afternoon and every aspect of it was great. Server was named Brittany I believe and she was simply excellent.",
        rating: 5,
        restaurant_id: pukkaId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Very nice evening spent with special family.",
        rating: 5,
        restaurant_id: mariachisId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "First time, and not the last. Very welcoming. The food was deliscious and service very good. Highly recommend.",
        rating: 4,
        restaurant_id: eldoradoTacoId,
        user_id: userLebron.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Enjoyed our drinks, dinner and dessert. Great service and ambience.",
        rating: 5,
        restaurant_id: mariachisId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "The food was absolutely on point, we had such a great experience and our server was top notch. ",
        rating: 4,
        restaurant_id: stelvioId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "The steaks were 'Melt In Your Mouth'!!! Nigel, our waiter was amazing!! Great experience overall!",
        rating: 5,
        restaurant_id: coconutLagoonId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "It was really great! Just temperature wise it was really chilly. A little mixup at the end with desserts also but overall we really enjoyed the evening",
        rating: 4,
        restaurant_id: bluRistoranteId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Food was served cold. Major No No. Fantastic Dessert. Service was good. Heavy Rock music should be toned down. Price vs Quality… not great.",
        rating: 3,
        restaurant_id: laBartolaId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
        rating: 4,
        restaurant_id: eldoradoTacoId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
        rating: 4,
        restaurant_id: utsavId,
        user_id: userCassidy.id,
      },
    ],
  });

  await prisma.table.createMany({
    data: [
      {
        restaurant_id: vivaanId,
        seats: 4,
      },
      {
        restaurant_id: vivaanId,
        seats: 4,
      },
      {
        restaurant_id: vivaanId,
        seats: 4,
      },
      {
        restaurant_id: vivaanId,
        seats: 4,
      },
      {
        restaurant_id: vivaanId,
        seats: 4,
      },
      {
        restaurant_id: vivaanId,
        seats: 2,
      },
      {
        restaurant_id: vivaanId,
        seats: 2,
      },
      {
        restaurant_id: vivaanId,
        seats: 2,
      },
      {
        restaurant_id: vivaanId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: RamaKrishnaId,
        seats: 2,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 4,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 4,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 4,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 4,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 4,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 2,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 2,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 2,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: coconutLagoonId,
        seats: 2,
      },
      {
        restaurant_id: coconutLagoonId,
        seats: 4,
      },
      {
        restaurant_id: coconutLagoonId,
        seats: 4,
      },
      {
        restaurant_id: coconutLagoonId,
        seats: 4,
      },
      {
        restaurant_id: coconutLagoonId,
        seats: 4,
      },
      {
        restaurant_id: coconutLagoonId,
        seats: 4,
      },
      {
        restaurant_id: coconutLagoonId,
        seats: 2,
      },
      {
        restaurant_id: coconutLagoonId,
        seats: 2,
      },
      {
        restaurant_id: coconutLagoonId,
        seats: 2,
      },
      {
        restaurant_id: coconutLagoonId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 2,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 4,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 4,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 4,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 4,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 4,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 2,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 2,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 2,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: adrakYorkvilleId,
        seats: 2,
      },
      {
        restaurant_id: adrakYorkvilleId,
        seats: 4,
      },
      {
        restaurant_id: adrakYorkvilleId,
        seats: 4,
      },
      {
        restaurant_id: adrakYorkvilleId,
        seats: 4,
      },
      {
        restaurant_id: adrakYorkvilleId,
        seats: 4,
      },
      {
        restaurant_id: adrakYorkvilleId,
        seats: 4,
      },
      {
        restaurant_id: adrakYorkvilleId,
        seats: 2,
      },
      {
        restaurant_id: adrakYorkvilleId,
        seats: 2,
      },
      {
        restaurant_id: adrakYorkvilleId,
        seats: 2,
      },
      {
        restaurant_id: adrakYorkvilleId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: curryishTavernId,
        seats: 2,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 4,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 4,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 4,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 4,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 4,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 2,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 2,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 2,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: utsavId,
        seats: 2,
      },
      {
        restaurant_id: utsavId,
        seats: 4,
      },
      {
        restaurant_id: utsavId,
        seats: 4,
      },
      {
        restaurant_id: utsavId,
        seats: 4,
      },
      {
        restaurant_id: utsavId,
        seats: 4,
      },
      {
        restaurant_id: utsavId,
        seats: 4,
      },
      {
        restaurant_id: utsavId,
        seats: 2,
      },
      {
        restaurant_id: utsavId,
        seats: 2,
      },
      {
        restaurant_id: utsavId,
        seats: 2,
      },
      {
        restaurant_id: utsavId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: pukkaId,
        seats: 2,
      },
      {
        restaurant_id: pukkaId,
        seats: 4,
      },
      {
        restaurant_id: pukkaId,
        seats: 4,
      },
      {
        restaurant_id: pukkaId,
        seats: 4,
      },
      {
        restaurant_id: pukkaId,
        seats: 4,
      },
      {
        restaurant_id: pukkaId,
        seats: 4,
      },
      {
        restaurant_id: pukkaId,
        seats: 2,
      },
      {
        restaurant_id: pukkaId,
        seats: 2,
      },
      {
        restaurant_id: pukkaId,
        seats: 2,
      },
      {
        restaurant_id: pukkaId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: kamasutraIndianId,
        seats: 2,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 4,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 4,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 4,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 4,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 4,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 2,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 2,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 2,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: eldoradoTacoId,
        seats: 2,
      },
      {
        restaurant_id: eldoradoTacoId,
        seats: 4,
      },
      {
        restaurant_id: eldoradoTacoId,
        seats: 4,
      },
      {
        restaurant_id: eldoradoTacoId,
        seats: 4,
      },
      {
        restaurant_id: eldoradoTacoId,
        seats: 4,
      },
      {
        restaurant_id: eldoradoTacoId,
        seats: 4,
      },
      {
        restaurant_id: eldoradoTacoId,
        seats: 2,
      },
      {
        restaurant_id: eldoradoTacoId,
        seats: 2,
      },
      {
        restaurant_id: eldoradoTacoId,
        seats: 2,
      },
      {
        restaurant_id: eldoradoTacoId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: laBartolaId,
        seats: 2,
      },
      {
        restaurant_id: laBartolaId,
        seats: 4,
      },
      {
        restaurant_id: laBartolaId,
        seats: 4,
      },
      {
        restaurant_id: laBartolaId,
        seats: 4,
      },
      {
        restaurant_id: laBartolaId,
        seats: 4,
      },
      {
        restaurant_id: laBartolaId,
        seats: 4,
      },
      {
        restaurant_id: laBartolaId,
        seats: 2,
      },
      {
        restaurant_id: laBartolaId,
        seats: 2,
      },
      {
        restaurant_id: laBartolaId,
        seats: 2,
      },
      {
        restaurant_id: laBartolaId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: elCatrinId,
        seats: 2,
      },
      {
        restaurant_id: elCatrinId,
        seats: 4,
      },
      {
        restaurant_id: elCatrinId,
        seats: 4,
      },
      {
        restaurant_id: elCatrinId,
        seats: 4,
      },
      {
        restaurant_id: elCatrinId,
        seats: 4,
      },
      {
        restaurant_id: elCatrinId,
        seats: 4,
      },
      {
        restaurant_id: elCatrinId,
        seats: 2,
      },
      {
        restaurant_id: elCatrinId,
        seats: 2,
      },
      {
        restaurant_id: elCatrinId,
        seats: 2,
      },
      {
        restaurant_id: elCatrinId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: mariachisId,
        seats: 2,
      },
      {
        restaurant_id: mariachisId,
        seats: 4,
      },
      {
        restaurant_id: mariachisId,
        seats: 4,
      },
      {
        restaurant_id: mariachisId,
        seats: 4,
      },
      {
        restaurant_id: mariachisId,
        seats: 4,
      },
      {
        restaurant_id: mariachisId,
        seats: 4,
      },
      {
        restaurant_id: mariachisId,
        seats: 2,
      },
      {
        restaurant_id: mariachisId,
        seats: 2,
      },
      {
        restaurant_id: mariachisId,
        seats: 2,
      },
      {
        restaurant_id: mariachisId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: canoRestaurantId,
        seats: 2,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 4,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 4,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 4,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 4,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 4,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 2,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 2,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 2,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: bluRistoranteId,
        seats: 2,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 4,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 4,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 4,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 4,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 4,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 2,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 2,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 2,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: stelvioId,
        seats: 2,
      },
      {
        restaurant_id: stelvioId,
        seats: 4,
      },
      {
        restaurant_id: stelvioId,
        seats: 4,
      },
      {
        restaurant_id: stelvioId,
        seats: 4,
      },
      {
        restaurant_id: stelvioId,
        seats: 4,
      },
      {
        restaurant_id: stelvioId,
        seats: 4,
      },
      {
        restaurant_id: stelvioId,
        seats: 2,
      },
      {
        restaurant_id: stelvioId,
        seats: 2,
      },
      {
        restaurant_id: stelvioId,
        seats: 2,
      },
      {
        restaurant_id: stelvioId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: sofiaId,
        seats: 2,
      },
      {
        restaurant_id: sofiaId,
        seats: 4,
      },
      {
        restaurant_id: sofiaId,
        seats: 4,
      },
      {
        restaurant_id: sofiaId,
        seats: 4,
      },
      {
        restaurant_id: sofiaId,
        seats: 4,
      },
      {
        restaurant_id: sofiaId,
        seats: 4,
      },
      {
        restaurant_id: sofiaId,
        seats: 2,
      },
      {
        restaurant_id: sofiaId,
        seats: 2,
      },
      {
        restaurant_id: sofiaId,
        seats: 2,
      },
      {
        restaurant_id: sofiaId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: amiciLoungeId,
        seats: 2,
      },
      {
        restaurant_id: amiciLoungeId,
        seats: 4,
      },
      {
        restaurant_id: amiciLoungeId,
        seats: 4,
      },
      {
        restaurant_id: amiciLoungeId,
        seats: 4,
      },
      {
        restaurant_id: amiciLoungeId,
        seats: 4,
      },
      {
        restaurant_id: amiciLoungeId,
        seats: 4,
      },
      {
        restaurant_id: amiciLoungeId,
        seats: 2,
      },
      {
        restaurant_id: amiciLoungeId,
        seats: 2,
      },
      {
        restaurant_id: amiciLoungeId,
        seats: 2,
      },
      {
        restaurant_id: amiciLoungeId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: gauchoPiccadillyId,
        seats: 2,
      },
      {
        restaurant_id: gauchoPiccadillyId,
        seats: 4,
      },
      {
        restaurant_id: gauchoPiccadillyId,
        seats: 4,
      },
      {
        restaurant_id: gauchoPiccadillyId,
        seats: 4,
      },
      {
        restaurant_id: gauchoPiccadillyId,
        seats: 4,
      },
      {
        restaurant_id: gauchoPiccadillyId,
        seats: 4,
      },
      {
        restaurant_id: gauchoPiccadillyId,
        seats: 2,
      },
      {
        restaurant_id: gauchoPiccadillyId,
        seats: 2,
      },
      {
        restaurant_id: gauchoPiccadillyId,
        seats: 2,
      },
      {
        restaurant_id: gauchoPiccadillyId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: hawksmoorId,
        seats: 2,
      },
      {
        restaurant_id: hawksmoorId,
        seats: 4,
      },
      {
        restaurant_id: hawksmoorId,
        seats: 4,
      },
      {
        restaurant_id: hawksmoorId,
        seats: 4,
      },
      {
        restaurant_id: hawksmoorId,
        seats: 4,
      },
      {
        restaurant_id: hawksmoorId,
        seats: 4,
      },
      {
        restaurant_id: hawksmoorId,
        seats: 2,
      },
      {
        restaurant_id: hawksmoorId,
        seats: 2,
      },
      {
        restaurant_id: hawksmoorId,
        seats: 2,
      },
      {
        restaurant_id: hawksmoorId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: highTimberId,
        seats: 2,
      },
      {
        restaurant_id: highTimberId,
        seats: 4,
      },
      {
        restaurant_id: highTimberId,
        seats: 4,
      },
      {
        restaurant_id: highTimberId,
        seats: 4,
      },
      {
        restaurant_id: highTimberId,
        seats: 4,
      },
      {
        restaurant_id: highTimberId,
        seats: 4,
      },
      {
        restaurant_id: highTimberId,
        seats: 2,
      },
      {
        restaurant_id: highTimberId,
        seats: 2,
      },
      {
        restaurant_id: highTimberId,
        seats: 2,
      },
      {
        restaurant_id: highTimberId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: assanabelId,
        seats: 2,
      },
      {
        restaurant_id: assanabelId,
        seats: 4,
      },
      {
        restaurant_id: assanabelId,
        seats: 4,
      },
      {
        restaurant_id: assanabelId,
        seats: 4,
      },
      {
        restaurant_id: assanabelId,
        seats: 4,
      },
      {
        restaurant_id: assanabelId,
        seats: 4,
      },
      {
        restaurant_id: assanabelId,
        seats: 2,
      },
      {
        restaurant_id: assanabelId,
        seats: 2,
      },
      {
        restaurant_id: assanabelId,
        seats: 2,
      },
      {
        restaurant_id: assanabelId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: JeanGeorgeId,
        seats: 2,
      },
      {
        restaurant_id: JeanGeorgeId,
        seats: 4,
      },
      {
        restaurant_id: JeanGeorgeId,
        seats: 4,
      },
      {
        restaurant_id: JeanGeorgeId,
        seats: 4,
      },
      {
        restaurant_id: JeanGeorgeId,
        seats: 4,
      },
      {
        restaurant_id: JeanGeorgeId,
        seats: 4,
      },
      {
        restaurant_id: JeanGeorgeId,
        seats: 2,
      },
      {
        restaurant_id: JeanGeorgeId,
        seats: 2,
      },
      {
        restaurant_id: JeanGeorgeId,
        seats: 2,
      },
      {
        restaurant_id: JeanGeorgeId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: SacréId,
        seats: 2,
      },
      {
        restaurant_id: SacréId,
        seats: 4,
      },
      {
        restaurant_id: SacréId,
        seats: 4,
      },
      {
        restaurant_id: SacréId,
        seats: 4,
      },
      {
        restaurant_id: SacréId,
        seats: 4,
      },
      {
        restaurant_id: SacréId,
        seats: 4,
      },
      {
        restaurant_id: SacréId,
        seats: 2,
      },
      {
        restaurant_id: SacréId,
        seats: 2,
      },
      {
        restaurant_id: SacréId,
        seats: 2,
      },
      {
        restaurant_id: SacréId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: tamaraId,
        seats: 2,
      },
      {
        restaurant_id: tamaraId,
        seats: 4,
      },
      {
        restaurant_id: tamaraId,
        seats: 4,
      },
      {
        restaurant_id: tamaraId,
        seats: 4,
      },
      {
        restaurant_id: tamaraId,
        seats: 4,
      },
      {
        restaurant_id: tamaraId,
        seats: 4,
      },
      {
        restaurant_id: tamaraId,
        seats: 2,
      },
      {
        restaurant_id: tamaraId,
        seats: 2,
      },
      {
        restaurant_id: tamaraId,
        seats: 2,
      },
      {
        restaurant_id: tamaraId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: lEmpireId,
        seats: 2,
      },
      {
        restaurant_id: lEmpireId,
        seats: 4,
      },
      {
        restaurant_id: lEmpireId,
        seats: 4,
      },
      {
        restaurant_id: lEmpireId,
        seats: 4,
      },
      {
        restaurant_id: lEmpireId,
        seats: 4,
      },
      {
        restaurant_id: lEmpireId,
        seats: 4,
      },
      {
        restaurant_id: lEmpireId,
        seats: 2,
      },
      {
        restaurant_id: lEmpireId,
        seats: 2,
      },
      {
        restaurant_id: lEmpireId,
        seats: 2,
      },
      {
        restaurant_id: lEmpireId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: kEBAPjIId,
        seats: 2,
      },
      {
        restaurant_id: kEBAPjIId,
        seats: 4,
      },
      {
        restaurant_id: kEBAPjIId,
        seats: 4,
      },
      {
        restaurant_id: kEBAPjIId,
        seats: 4,
      },
      {
        restaurant_id: kEBAPjIId,
        seats: 4,
      },
      {
        restaurant_id: kEBAPjIId,
        seats: 4,
      },
      {
        restaurant_id: kEBAPjIId,
        seats: 2,
      },
      {
        restaurant_id: kEBAPjIId,
        seats: 2,
      },
      {
        restaurant_id: kEBAPjIId,
        seats: 2,
      },
      {
        restaurant_id: kEBAPjIId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: fineDineId,
        seats: 2,
      },
      {
        restaurant_id: fineDineId,
        seats: 4,
      },
      {
        restaurant_id: fineDineId,
        seats: 4,
      },
      {
        restaurant_id: fineDineId,
        seats: 4,
      },
      {
        restaurant_id: fineDineId,
        seats: 4,
      },
      {
        restaurant_id: fineDineId,
        seats: 4,
      },
      {
        restaurant_id: fineDineId,
        seats: 2,
      },
      {
        restaurant_id: fineDineId,
        seats: 2,
      },
      {
        restaurant_id: fineDineId,
        seats: 2,
      },
      {
        restaurant_id: fineDineId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: heliotId,
        seats: 2,
      },
      {
        restaurant_id: heliotId,
        seats: 4,
      },
      {
        restaurant_id: heliotId,
        seats: 4,
      },
      {
        restaurant_id: heliotId,
        seats: 4,
      },
      {
        restaurant_id: heliotId,
        seats: 4,
      },
      {
        restaurant_id: heliotId,
        seats: 4,
      },
      {
        restaurant_id: heliotId,
        seats: 2,
      },
      {
        restaurant_id: heliotId,
        seats: 2,
      },
      {
        restaurant_id: heliotId,
        seats: 2,
      },
      {
        restaurant_id: heliotId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: safranId,
        seats: 2,
      },
      {
        restaurant_id: safranId,
        seats: 4,
      },
      {
        restaurant_id: safranId,
        seats: 4,
      },
      {
        restaurant_id: safranId,
        seats: 4,
      },
      {
        restaurant_id: safranId,
        seats: 4,
      },
      {
        restaurant_id: safranId,
        seats: 4,
      },
      {
        restaurant_id: safranId,
        seats: 2,
      },
      {
        restaurant_id: safranId,
        seats: 2,
      },
      {
        restaurant_id: safranId,
        seats: 2,
      },
      {
        restaurant_id: safranId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: cityLightsId,
        seats: 2,
      },
      {
        restaurant_id: cityLightsId,
        seats: 4,
      },
      {
        restaurant_id: cityLightsId,
        seats: 4,
      },
      {
        restaurant_id: cityLightsId,
        seats: 4,
      },
      {
        restaurant_id: cityLightsId,
        seats: 4,
      },
      {
        restaurant_id: cityLightsId,
        seats: 4,
      },
      {
        restaurant_id: cityLightsId,
        seats: 2,
      },
      {
        restaurant_id: cityLightsId,
        seats: 2,
      },
      {
        restaurant_id: cityLightsId,
        seats: 2,
      },
      {
        restaurant_id: cityLightsId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: drouantId,
        seats: 2,
      },
      {
        restaurant_id: drouantId,
        seats: 4,
      },
      {
        restaurant_id: drouantId,
        seats: 4,
      },
      {
        restaurant_id: drouantId,
        seats: 4,
      },
      {
        restaurant_id: drouantId,
        seats: 4,
      },
      {
        restaurant_id: drouantId,
        seats: 4,
      },
      {
        restaurant_id: drouantId,
        seats: 2,
      },
      {
        restaurant_id: drouantId,
        seats: 2,
      },
      {
        restaurant_id: drouantId,
        seats: 2,
      },
      {
        restaurant_id: drouantId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: blockId,
        seats: 2,
      },
      {
        restaurant_id: blockId,
        seats: 4,
      },
      {
        restaurant_id: blockId,
        seats: 4,
      },
      {
        restaurant_id: blockId,
        seats: 4,
      },
      {
        restaurant_id: blockId,
        seats: 4,
      },
      {
        restaurant_id: blockId,
        seats: 4,
      },
      {
        restaurant_id: blockId,
        seats: 2,
      },
      {
        restaurant_id: blockId,
        seats: 2,
      },
      {
        restaurant_id: blockId,
        seats: 2,
      },
      {
        restaurant_id: blockId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: casaId,
        seats: 2,
      },
      {
        restaurant_id: casaId,
        seats: 4,
      },
      {
        restaurant_id: casaId,
        seats: 4,
      },
      {
        restaurant_id: casaId,
        seats: 4,
      },
      {
        restaurant_id: casaId,
        seats: 4,
      },
      {
        restaurant_id: casaId,
        seats: 4,
      },
      {
        restaurant_id: casaId,
        seats: 2,
      },
      {
        restaurant_id: casaId,
        seats: 2,
      },
      {
        restaurant_id: casaId,
        seats: 2,
      },
      {
        restaurant_id: casaId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: tacoId,
        seats: 2,
      },
      {
        restaurant_id: tacoId,
        seats: 4,
      },
      {
        restaurant_id: tacoId,
        seats: 4,
      },
      {
        restaurant_id: tacoId,
        seats: 4,
      },
      {
        restaurant_id: tacoId,
        seats: 4,
      },
      {
        restaurant_id: tacoId,
        seats: 4,
      },
      {
        restaurant_id: tacoId,
        seats: 2,
      },
      {
        restaurant_id: tacoId,
        seats: 2,
      },
      {
        restaurant_id: tacoId,
        seats: 2,
      },
      {
        restaurant_id: tacoId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: jefeId,
        seats: 2,
      },
      {
        restaurant_id: jefeId,
        seats: 4,
      },
      {
        restaurant_id: jefeId,
        seats: 4,
      },
      {
        restaurant_id: jefeId,
        seats: 4,
      },
      {
        restaurant_id: jefeId,
        seats: 4,
      },
      {
        restaurant_id: jefeId,
        seats: 4,
      },
      {
        restaurant_id: jefeId,
        seats: 2,
      },
      {
        restaurant_id: jefeId,
        seats: 2,
      },
      {
        restaurant_id: jefeId,
        seats: 2,
      },
      {
        restaurant_id: jefeId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: terroniId,
        seats: 2,
      },
      {
        restaurant_id: terroniId,
        seats: 4,
      },
      {
        restaurant_id: terroniId,
        seats: 4,
      },
      {
        restaurant_id: terroniId,
        seats: 4,
      },
      {
        restaurant_id: terroniId,
        seats: 4,
      },
      {
        restaurant_id: terroniId,
        seats: 4,
      },
      {
        restaurant_id: terroniId,
        seats: 2,
      },
      {
        restaurant_id: terroniId,
        seats: 2,
      },
      {
        restaurant_id: terroniId,
        seats: 2,
      },
      {
        restaurant_id: terroniId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: estId,
        seats: 2,
      },
      {
        restaurant_id: estId,
        seats: 4,
      },
      {
        restaurant_id: estId,
        seats: 4,
      },
      {
        restaurant_id: estId,
        seats: 4,
      },
      {
        restaurant_id: estId,
        seats: 4,
      },
      {
        restaurant_id: estId,
        seats: 4,
      },
      {
        restaurant_id: estId,
        seats: 2,
      },
      {
        restaurant_id: estId,
        seats: 2,
      },
      {
        restaurant_id: estId,
        seats: 2,
      },
      {
        restaurant_id: estId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: terroniSudId,
        seats: 2,
      },
      {
        restaurant_id: terroniSudId,
        seats: 4,
      },
      {
        restaurant_id: terroniSudId,
        seats: 4,
      },
      {
        restaurant_id: terroniSudId,
        seats: 4,
      },
      {
        restaurant_id: terroniSudId,
        seats: 4,
      },
      {
        restaurant_id: terroniSudId,
        seats: 4,
      },
      {
        restaurant_id: terroniSudId,
        seats: 2,
      },
      {
        restaurant_id: terroniSudId,
        seats: 2,
      },
      {
        restaurant_id: terroniSudId,
        seats: 2,
      },
      {
        restaurant_id: terroniSudId,
        seats: 2,
      },
      //*/
      {
        restaurant_id: ilPadrinoId,
        seats: 2,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 4,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 4,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 4,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 4,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 4,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 2,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 2,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 2,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 2,
      },
    ],
  });

  res.status(200).json({ name: "hello" });
}
