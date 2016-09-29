'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.register = registerUser;

function registerUser(req, res, next) {
  var userData = _.pick(req.body, 'name', 'email', 'password');

  if (req.body.type === 'company') {
    userData.roles = ['owner'];
  }

  User.register(userData, (err, user) => {
    if (err && (11000 === err.code || 11001 === err.code)) {
      return res.status(400).json({ message: 'E-mail is already in use.' });
    }

    if (err) {
      return next(err);
    }

    // we are going to need a session after the user signs up
    req.logIn(user, (err) => {
      // just in case :)
      delete user.password;
      delete user.passwordSalt;

      res.json(user);
    });
  });
}
