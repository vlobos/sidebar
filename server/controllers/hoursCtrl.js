const { Hour } = require('../../db/models');

const hoursCtrl = {
  get: (req, res) => {
    Hour.findAll({ where: {
      rid: req.query.rid
    }})
      .then(data => {
//        console.log('found hours data ', data);
        res.status(200).send(data);
      })
      .catch(err => {
        console.log('failed hours data ', err);
        res.status(404).send(err)
      })
  },

  post: (req, res) => {
    Hour.create({
      rid: req.query.rid,
      Mon: '5:00 am - 11:00 pm',
      Tue: '6:00 am - 10:00 pm',
      Wed: '5:00 am - 9:00 pm',
      Thu: '7:00 am - 11: 00 pm',
      Fri: '6:00 am - 7:00 pm',
      Sat: '7:00 am - 12:00 am', 
      Sun: '11:00 am - 6:00 pm'
    })
    .then(data => {
     // console.log('New hours created', data.rid);
      res.status(200).send(data)
    })
    .catch(err => {
      console.log('failed hours creation, ', err)
      res.status(404).send(err)
    })
  },

  /*--- Put and Delete --*/
  put: (req, res) => {
    Hour.findOne({
      rid: req.query.rid
    })
    .then(Hours => {
      return Hours.updateAttributes({
        Tue: '6:00 am - 9:00 pm'
      })
    })
    .then(data => {
     //  console.log(data, "here is the data for hours");
      res.status(200).send(data);
    })
    .catch(err => {
      console.log('failed to update hours', err);
      res.status(404).send(err);
    })
  },

  delete: (req, res) => {
    Hour.destroy({
      where: {
        Mon: '7:07 am - 2:12 pm\n4:18 pm - 12:01 am'
      }
    })
    .then(deletedHour => {
      console.log('deleted')
    })
    .cathc(err => {
      console.log('failed to delete hours ', err);
      res.status(404).send(err);
    })
  }
}

module.exports.hoursCtrl = hoursCtrl;