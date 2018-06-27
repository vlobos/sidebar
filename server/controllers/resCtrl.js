// const { Restaurant } = require('../../db/models');
// const data = require('./data.js');   
// //const { restaurantData, hoursData, detailsData, miscData } = require('../../db/data/datagenerator')
// const { db } = require('../../db/config')

// const resCtrl = {
//   get: (req, res) => {
//     Restaurant.findAll({ where: {
//       rid: req.query.rid
//     }})
//     .then(data => {
// //      console.log('get misc data ', data);
//       res.status(200).send(data);
//     })
//     .catch(err => {
//       console.log('failed getting restaurants ', err);
//       res.status(404).send(err);
//     })
//   },
// // --- post is required by models/index ---
//   post: (req, res) => {
//     db.queryInterface.bulkInsert('restaurants', data.restaurantData)
//       .then((data) => {
//         console.log('inserted restaurant dummies ', data); 
//       })
//       .catch((err) => console.log('failed insert restaurant dummies ', err))
// //     res.status(201).send(data)
//     db.queryInterface.bulkInsert('hours', data.hoursData)
//       .then((data) => {
//       console.log('inserted hours dummies ', data);
//   //    res.status(201).send(data)
//     })
//       .catch((err) => console.log('failed insert hours dummies ', err))
//     db.queryInterface.bulkInsert('details', data.detailsData)
//       .then((data) => {
//       console.log('inserted details dummies ', data);
//   //    res.status(201).send(data)
//     })
//       .catch((err) => console.log('failed insert details dummies ', err))
//     db.queryInterface.bulkInsert('miscs', data.miscData)
//       .then((data) => {
//       console.log('inserted misc dummies ', data);
//   //    res.status(201).send(data)
//     })
//       .catch((err) => console.log('failed insert misc dummies ', err))
//   },

//   /*--- Put and Delete --*/
//   put: (req, res) => {
//     Restaurant.findOne({
//       rid: req.query.rid
//     })
//     .then(misc => {
//       return Restaurant.updateAttributes({
//         name: 'Balthazar'
//       })
//     })
//     .then(data => {
//       res.status(200).send(data);
//     })
//     .catch(err => {
//       console.log('failed updating restaurant', err);
//       res.status(404).send(err);
//     })
//   },

//   delete: (req, res) => {
//     Restaurant.destroy({
//       where: {
//         rid: rid.req.rid
//       }
//     })
//     .then(deletedRestaurant => {
//       console.log('deleted')
//     })
//     .catch(err => {
//       console.log('failed to delete restaurant ', err);
//       res.status(404).send(err);
//     })
//   }

// }

// module.exports.resCtrl = resCtrl;
