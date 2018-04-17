'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('models', require('./models'));
const { Beach, Lifeguard } = app.get('models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/beaches', (req, res, next) => {
  Beach.findAll()
    .then(beaches => {
      res.status(200).json(beaches);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});