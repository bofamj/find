const data = [
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
];

//**--------menu----------**/

const menuData = [
  //** 1  *//
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
];
