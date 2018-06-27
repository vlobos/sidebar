const Restaurant = require('../models/restaurant');

const restCtrl = {
  get: (req, res) => {
    let params = [req.query.id]
    Restaurant.get(params, (err, results) => {
      if (err) {
        console.log('get request failed', err);
      } else {
        res.send(results);
      }
    })
  },
  post: (req, res) => {
    let params = [req.query.Restaurant, req.query.Price_Range, req.query.Health_Score, req.query.Mon, req.query.Tue, req.query.Wed, req.query.Thu, req.query.Fri, req.query.Sat, req.query.Sun, req.query.Takes_Reservations, req.query.TakeZout, req.query.Accepts_Credit_Cards, req.query.Accepts_Apple_Pay, req.query.Good_For, req.query.Parking, req.query.Bike_Parking, req.query.Wheelchair_Accessible, req.query.Good_For_Kids, req.query.Good_For_Groups, req.query.Dogs_Allowed, req.query.Attire, req.query.Ambience, req.query.Noise_Level, req.query.Alcohol, req.query.Outdoor_Seating, req.query.Wifi, req.query.Has_TV, req.query.Caters, req.query.Gender_Neutral_Restrooms, req.query.Smoking];
    Restaurant.post(params, (err, results) => {
      if(err) {
        console.log('post request failed', err); 
      } else {
        console.log('post success');
        res.sendStatus(200);
      }
    })
  },
  put: (req, res) => {
    let params = [req.query.Health_Score, req.query.id];
    Restaurant.put(params, (err, results) => {
      if (err) {
        console.log('put request failed', err);
      } else {
        res.sendStatus(200);
      }
    })
  },
  delete: (req, res) => {
    let params = [req.query.id];
    Restaurant.delete(params, (err, results) => {
      if (err) {
        console.log('delete request failed', err);
      } else {
        res.sendStatus(200);
      }
    })
  },
}

module.exports.restCtrl = restCtrl