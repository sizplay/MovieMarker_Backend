const conn = require('../conn');
const User = require('./User');
const Tour = require('./Tour');
const Location = require('./Location');

Location.belongsTo(Tour);
Tour.hasMany(Location);
Tour.belongsTo(User);
User.hasMany(Tour);

const sync = () => {
  return conn.sync({ force: true });
};

const seed = () => {
  return Promise.all([
    User.create({ firstName: 'Marco', lastName: 'Chen', email: 'marcopchen@gmail.com' }),
    User.create({ firstName: 'Alan', lastName: 'Fleming', email: 'alalfleming@gmail.com' }),
    User.create({ firstName: 'Chaehoon', lastName: 'Lim', email: 'sizplay@gmail.com' }),
    Tour.create({ name:'Brooklyn expo center', customers: 3 }),
    Location.create({ name: 'Booklyn expo center', lat: '40.728157', lng: '-73.957797'})
  ])
  .then(([marco, alan, chaehoon, tour, location]) => {
    location.setTour(tour);
    tour.setUser(marco);
  })
}

module.exports = {
  conn,
  sync,
  seed,
  models: {
    Location,
    Tour,
    User
  }
};
