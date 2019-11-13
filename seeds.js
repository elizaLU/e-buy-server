// const db = require("./db");
// const Ad = require("./ads/model");
// const Image = require("./images/model");

// db.sync({ force: true })
//   .then(() =>
//     Promise.all([
//       Image.destroy({
//         where: {}
//       }),
//       Ad.destroy({
//         where: {}
//       }),
//       Ad.create(
//         {
//           title: "Laptop",
//           description: "It works",
//           price: 100.0,
//           images: [
//             {
//               url:
//                 "https://assets.wired.com/photos/w_1200/wp-content/uploads/2016/10/RZR_001.jpg",

//               url:
//                 "https://i.gadgets360cdn.com/large/mi_gaming_laptop_2019_image_1565003115644.jpg"
//             }
//           ]
//         },
//         {
//           include: [Image]
//         }
//       )
//     ])
//   )
//   .then(() => console.log("Database seeded!"))
//   .catch(console.error);
  
  
  //SOMETHING LIKE THIS


// const ads = [{ title: 'Twelve angry men', description: "The jury is to decide if a young man is guilty of murdering his father", price: 10 },
//     { title: 'La Dolce Vita', synopsis: "Rome journalist follows and gets entangled in lives of celebrities.", price: 13 }, { title: 'I\'m not an easy man', synopsis: "Womanizer wakes up in a world ruled by women. Super funny!", price: 15 }]

//     moviesDB
//   .sync({ force: true })
//   .then(() => {
//     console.log('Movies database has been updated')
//   })
//  .then(() => {
//     const adsPromises = ads.map((ad) => Ad.create(ad))
//     return Promise.all(adsPromises)
//   })
//   .catch(err => {
//     console.error("Unable to create tables, shutting down...", err);
//     process.exit(1)
//   }
//   );



// module.exports = Movie