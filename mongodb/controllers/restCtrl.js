const mongoDb = require('../config');

const restCtrl = {
  get: (req, res) => {
    const sidebar = mongoDb();
    sidebar.collection('restaurant_info').find({_id: Number(req.query.id)}).toArray((err, results)=> {
      if (err) {
        throw err;
      } else {
        console.log('Successful query')
        res.send(results);
      }
    })
  },

  post: (req, res) => {
    const sidebar = mongoDb();
    sidebar.collection('restaurant_info').insertOne({_id: Number(req.query.id), Restaurant: req.query.restaurant, Price_Range: req.query.price, Health_Score: req.query.health, Mon: req.query.mon, Tue: req.query.tue, Wed: req.query.wed, Thu: req.query.thu, Fri: req.query.fri, Sat: req.query.sat, Sun: req.query.sun, Takes_Reservations: req.query.reservations, TakeZout: req.query.takeout, Accepts_Credit_Cards: req.query.creditcards, Accepts_Apple_Pay: req.query.apple, Good_For: req.query.goodfor, Parking: req.query.parking, Bike_Parking: req.query.bike, Wheelchair_Accessible: req.query.wheelchair, Good_For_Kids: req.query.goodforkids, Good_For_Groups: req.query.goodforgroups, Dogs_Allowed: req.query.dogs, Attire: req.query.attire, Ambience: req.query.ambience, Noise_Level: req.query.noise, Alcohol: req.query.alcohol, Outdoor_Seating: req.query.outdoors, Wifi: req.query.wifi, Has_TV: req.query.tv, Caters: req.query.caters, Gender_Neutral_Restrooms: req.query.gender, Smoking: req.query.smoking }, (err, results) => {
      if (err){
        throw err;
      } else {
        console.log('Successfully posted')
        res.sendStatus(200).end();
      }
    })
  },
  put: (req, res) => {
    const sidebar = mongoDb();
    sidebar.collection('restaurant_info').updateOne({_id: Number(req.query.id )}, {$set: {Health_Score: req.query.health}}, (err, results) => {
      if (err){
        throw err;
      } else {
        console.log('Successfully updated');
        res.sendStatus(200).end();
      }
    })
    
  },
  delete: (req, res) => {
    const sidebar = mongoDb();
    sidebar.collection('restaurant_info').deleteOne({_id: Number(req.query.id)}, (err, results) => {
      if (err){
        throw err;
      } else {
        console.log('Successfully deleted')
        res.sendStatus(200).end();
      }
    })
  }
}

module.exports.restCtrl = restCtrl

// app.post('/quotes', (req, res) => {
//   db.collection('quotes').save(req.body, (err, result) => {
//     if (err) return console.log(err)

//     console.log('saved to database')
//     res.redirect('/')
//   })
// })