const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const { conn,seed } = require('./db/models');

app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));

app.use('/api', require('./routes'));

//app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, './node_modules')))
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'public/index.html')));

conn.sync({ force: true })
  .then(() => {
    console.log('Seeding database');
    return seed();
  })
  .then(() => console.log('Seeding successful'))
  .catch(err => {
    console.error('Error while seeding');
    console.error(err.stack);
  });
