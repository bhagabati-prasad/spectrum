const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const conn = require('../config/connection');

module.exports.renderPage = (req, res) => {
  if (req.authUser) {
    res.redirect('/');
  } else {
    res.render('login');
  }
};

module.exports.handleLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  conn.query('SELECT * FROM users WHERE email=?', [email], (err, result) => {
    if (err) {
      // throw err;
      return res.status(400).send({
        error: true,
        message: err,
      });
    }
    if (!result.length) {
      return res.status(400).json({
        error: false,
        message: 'Wrong email!',
      });
    }
    bcrypt.compare(password, result[0]['password'], (bcErr, bcResult) => {
      if (bcErr) {
        // throw bcErr;
        return res.status(400).json({
          error: true,
          message: bcErr,
        });
      }
      if (bcResult) {
        // password matched
        const token = jwt.sign(
          {
            username: result[0].name,
            userId: result[0].id,
          },
          process.env.JWT_SECRET_KEY
        );
        res.cookie('access-token', token);
        return res.status(201).json({
          error: false,
          isLoggedIn: true,
          message: 'login success!',
        });
      }
      return res.status(400).json({
        message: 'Wrong Password!',
      });
    });
  });
};
