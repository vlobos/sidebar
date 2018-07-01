// const { detailsCtrl } = require('../controllers/detailsCtrl');
// const { hoursCtrl } = require('../controllers/hoursCtrl');
// const { miscCtrl } = require('../controllers/miscCtrl');
// const { resCtrl } = require('../controllers/resCtrl');
const router = require('express').Router();


/*----MariaDB---*/
//const { restCtrl } = require('../../mariadb/controllers/restCtrl')
/*---MongoDB---*/
const { restCtrl } = require('../../mongodb/controllers/restCtrl')

/* ---- OG Service DB --- */
// router.route('/details') 
//   .get(detailsCtrl.get)
//   .post(detailsCtrl.post)
//   /*-- added methods --*/
//   .put(detailsCtrl.put)
//   .delete(detailsCtrl.delete)

// router.route('/hours')
//   .get(hoursCtrl.get)
//   .post(hoursCtrl.post)
//  /*-- added methods --*/
//   .put(hoursCtrl.put)
//   .delete(hoursCtrl.delete)

// router.route('/misc')
//   .get(miscCtrl.get)
//   .post(miscCtrl.post)
//  /*-- added methods --*/
//  .put(miscCtrl.put)
//  .delete(miscCtrl.delete);

// router.route('/restaurants')
//   .get(resCtrl.get)
//   .post(resCtrl.post)
//  /*-- added methods --*/
//   .put(resCtrl.put)
//   .delete(resCtrl.delete); 

// module.exports.router = router;

/*---MariaDB and MongoDB---*/

router.route('/restaurants')
  .get(restCtrl.get)
  .post(restCtrl.post)
  .put(restCtrl.put)
  .delete(restCtrl.delete); 

module.exports.router = router;