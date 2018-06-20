const router = require('express').Router();

router.use('/locations', require('./locations'));
router.use('/tours', require('./tours'));
router.use('/users', require('./users'));

module.exports = router;
