const mongoDb = require('../config');

const restCtrl = {
  get: (req, res) => {
    const sidebar = mongoDb();
    sidebar.collection('restaurant_info').find({ _id: req.query.id }).toArray((err, results)=> {
      console.log(req.query.id, "wahts the point")
      if (err) {
        console.log("Nope. Didn't work")
      } else {
        console.log('here are results', results)
        res.send(results);
      }
    })
  },
  post: (req, res) => {
    console.log(req, "post controller")
    
  },
  put: (req, res) => {
    console.log(req, "put controller")
    
  },
  delete: (req, res) => {
    console.log(req, "delete controller")
    
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