const MongoClient = require('mongodb').MongoClient;
//const url = 'mongodb://18.144.44.107:32768';
const url = 'mongodb://localhost:27017'

let _db;
let _restaurantInfo;

MongoClient.connect(url, function(err,client){
  if (err) {
    console.log('Error connecting to DB')
    throw err;
  } else {
    _db = client.db('sidebar');
    _db.createCollection('restaurant_info', function(err,client){
      console.log('database created!')
      if (err){
        throw err
      } else {
        _restaurantInfo = _db.collection('restaurant_info')
        console.log('table created!')
      } 
    })
  }
})

function getRestaurantInfo(){
  return _restaurantInfo;
}

module.exports = getRestaurantInfo


