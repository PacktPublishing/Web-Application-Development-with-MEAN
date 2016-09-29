'use strict';

const mongoose = require('mongoose');
const logger = require('./winston').logger();
const config = require('./index');

module.exports.init = initMongoose;

function initMongoose(app) {
  logger.debug('Initializing %s configs', 'Mongoose');

  mongoose.connect(config.mongodb.uri);

  // If the Node process ends, cleanup existing connections
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('SIGHUP', cleanup);

  if (app) {
    app.set('mongoose', mongoose);
  }

  return mongoose;
};

function cleanup() {
  mongoose.connection.close(function () {
    logger.info('Closing DB connections and stopping the app. Bye bye.');
    process.exit(0);
  });
}
