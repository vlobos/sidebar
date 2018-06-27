const db  = require('../config/index');

const Restaurant = {

    get: (params, callback) => {
      let command = 'select * from restaurant_info where id = ?'
      db.query(command, params, (err, results) => {
        callback(err, results);
      })
    },
    post: (params, callback) => {
      let command = 'insert into restaurant_info (Restaurant, Price_Range, Health_Score, Mon, Tue, Wed, Thu, Fri, Sat, Sun, Takes_Reservations, TakeZout, Accepts_Credit_Cards, Accepts_Apple_Pay, Good_For, Parking, Bike_Parking, Wheelchair_Accessible, Good_For_Kids, Good_For_Groups, Dogs_Allowed, Attire, Ambience, Noise_Level, Alcohol, Outdoor_Seating, Wifi, Has_TV, Caters, Gender_Neutral_Restrooms, Smoking) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
      db.query(command, params, (err, results) => {
        callback(err, results);
      })
    },
    put: (params, callback) => {
      let command = 'update restaurant_info set Health_Score = ? where id = ?';
      db.query(command, params, (err, results) => {
        callback(err, results);
      })
    },
    delete: (params, callback) => {
      let command = 'delete from restaurant_info where id = ?';
      db.query(command, params, (err, results) => {
        callback(err, results);
      })
    }

}

module.exports = Restaurant