const MongoClient = require('mongodb').MongoClient;
//change `localhost` to the Sidebar_Database EC2 instance IP : port
const url = 'mongodb://18.144.44.107:32768';

let db;

MongoClient.connect(url, { poolSize: 20 }, function(err,client){
  if (err) {
    console.log('Error connecting to DB')
    throw err;
  } else {
    db = client.db('sidebar');
    client.db('sidebar').createCollection('restaurant_info', function(err,client){
      console.log('database created!')
      if (err){
        throw err
      } else {
        console.log('table created!')
      } 
    })
  }
})

function mongoDb(){
  return db
}

module.exports = mongoDb


