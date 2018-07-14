const router = require('express').Router();
const { restCtrl } = require('../../mongodb/controllers/restCtrl');

router.route('/restaurants/:id')
  .get(restCtrl.get)
  .delete(restCtrl.delete)

router.route('/restaurants')  
  .post(restCtrl.post)
  .put(restCtrl.put)


module.exports.router = router;