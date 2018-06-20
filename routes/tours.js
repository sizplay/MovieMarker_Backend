const router = require('express').Router();
const { Tour } = require('../db/models');

router.get('/', (req, res, next) => {
  Tour.findAll()
    .then(tours => res.send(tours))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Tour.create(req.body)
    .then(tour => res.send(tour))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Tour.findById(req.params.id)
    .then(tour => {
      Object.assign(tour, req.body);
      return tour.save();
    })
    .then(tour => res.send(tour))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Tour.findById(req.params.id)
    .then(tour => {
      tour.destroy();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
