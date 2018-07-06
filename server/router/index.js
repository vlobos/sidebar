const router = require('express').Router();

const { restCtrl } = require('../../mongodb/controllers/restCtrl')

router.route('/restaurants')
  .get(restCtrl.get)
  .post(restCtrl.post)
  .put(restCtrl.put)
  .delete(restCtrl.delete); 

module.exports.router = router;