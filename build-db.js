'use strict';
let sequelize = require('sequelize');
let queryInterface = require('sequelize/lib/query-interface');

const models = require('./models');

const { lifeguards } = require('./seeders/data/lifeguards');
const { beaches } = require('./seeders/data/beaches');


const createdb = (queryInterface) => {
  return models.sequelize.sync({ force: true })
    .then((queryInterface) => {
      return models.Beach.bulkCreate(beaches);
    })
    .then((queryInterface) => {
      return models.Lifeguard.bulkCreate(lifeguards);
    })
    .catch((err) => {
      console.log('ERROR:', err);
    })
    .finally(() => {
      process.exit();
    });
}

createdb(queryInterface);