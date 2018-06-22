const { Misc } = require('../../db/models');


const miscCtrl = {
  get: (req, res) => {
    Misc.findAll({ where: {
      rid: req.query.rid
    }})
      .then(data => {
//        console.log('get misc data ', data);
        res.status(200).send(data);
      })
      .catch(err => {
        console.log('failed get misc ', err);
        res.status(404).send(err);
      })
  },
  post: (req, res) => {
    Misc.create({
      rid: req.query.rid,
      Takes_Reservations: 'Yes', 
      TakeZout: 'No', 
      Accepts_Credit_Cards: 'Yes', 
      Accepts_Apple_Pay: 'No', 
      Good_For: 'No', 
      Parking: 'Street', 
      Bike_Parking: 'None',
      Wheelchair_Accessible: 'Yes', 
      Good_For_Kids: 'Yes', 
      Good_For_Groups: 'No', 
      Dogs_Allowed: 'Ok', 
      Attire: 'Strict', 
      Ambience: 'Casual', 
      Noise_Level: 'Loud', 
      Alcohol: 'SO MUCH', 
      Outdoor_Seating: 'No', 
      Wifi: 'Yes', 
      Has_TV: 'Yes', 
      Caters: 'No', 
      Gender_Neutral_Restrooms: 'No', 
      Smoking: 'Yes'
    })
    .then(data => {
     // console.log('New hours created', data.rid);
      res.status(200).send(data)
    })
    .catch(err => {
      console.log('failed misc creation, ', err)
      res.status(404).send(err)
    })
  },

  /*--- Put and Delete --*/
  put: (req, res) => {
    Misc.findOne({
      rid: req.query.rid
    })
    .then(misc => {
      return Misc.updateAttributes({
        Gender_Neutral_Restrooms: 'Yes'
      })
    })
    .then(data => {
     // console.log(data, "here is the data for hours");
      res.status(200).send(data);
    })
    .catch(err => {
      console.log('failed updating misc info', err);
      res.status(404).send(err);
    })
  },

  delete: (req, res) => {
    Misc.destroy({
      where: {
        rid: rid.req.rid
      }
    })
    .then(deletedHour => {
      console.log('deleted')
    })
    .catch(err => {
      console.log('failed to delete misc info ', err);
      res.status(404).send(err);
    })
  }
}

module.exports.miscCtrl = miscCtrl;