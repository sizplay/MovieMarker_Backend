const router = require('express').Router();
const { Location } = require('../db/models');

router.get('/', (req, res, next) => {
  Location.findAll()
    .then(locations => res.send(locations))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Location.create(req.body)
    .then(location => res.send(location))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Location.findById(req.params.id)
    .then(location => {
      Object.assign(location, req.body);
      return location.save();
    })
    .then(location => res.send(location))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Location.findById(req.params.id)
    .then(location => {
      location.destroy();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
