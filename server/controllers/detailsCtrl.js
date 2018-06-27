// const { Detail } = require('../../db/models');

// const detailsCtrl = {
//   get: (req, res) => {
//     Detail.findAll({ where: {
//       rid: req.query.rid
//     }})
//       .then(data => {
//   //     console.log('get details ', data);
//         res.status(200).send(data);
//       })
//       .catch(err => {
//         console.log('failed get details ', err);
//         res.status(404).send(err);
//       })
//   },
//   post: (req, res) => {
//     Detail.create({
//       rid: req.query.rid, 
//       Today: '', 
//       Price_Range: '$500-$1,000', 
//       Health_Score: 'A+'
//     })
//     .then(data => {
//       //console.log('New details created', data);
//       res.status(200).send(data)
//     })
//     .catch(err => {
//       console.log('failed hours creation, ', err)
//       res.status(404).send(err)
//     })
//   },

// /*-- put and delete --*/
//   put: (req, res) => {

//     Detail.findOne({  
//       rid: req.query.rid
//     })
//     .then(Detail => {
//       return Detail.updateAttributes({
//         Health_Score: 'B'
//       })
//     })
//     .then(data => {
//       //console.log(data, "Here is data")
//       res.status(200).send(data);
//     })
//     .catch(err => {
//       console.log('failed getting details ', err);
//       res.status(404).send(err);
//     })

//     // const newData = {  
//     //   Health_Score: 'B'
//     // };
    
//     // Detail.update(newData, {where: { rid: req.query.rid } })  
//     // .then(updatedHealthScore => {
//     //   console.log(updatedHealthScore, "here!")
//     // })
//     // .then(data => {
//     //   res.status(200).send(data);
//     // })
//     // .catch(err => {
//     //   console.log('failed get details ', err);
//     //   res.status(404).send(err);
//     // })
//   },

//   delete: (req, res) => {
//     Detail.destroy({
//       where: {
//         rid: req.query.rid
//       }
//     })
//     .then(deletedID => {
//       console.log('deleted')
//     })
//     .catch(err => {
//       console.log('failed deleting details ', err);
//       res.status(404).send(err);
//     })
//   }

// }

// module.exports.detailsCtrl = detailsCtrl;