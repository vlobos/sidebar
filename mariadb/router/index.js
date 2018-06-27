const { restCtrl } = require('../controllers/restCtrl')
const router = require('express').Router();

router.route('/restaurants')
  .get(restCtrl.get)
  .post(restCtrl.post)
 /*-- added methods --*/
  .put(restCtrl.put)
  .delete(restCtrl.delete); 

module.exports.router = router;