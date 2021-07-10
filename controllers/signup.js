const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const conn = require('../config/connection');

module.exports.renderPage = (req, res) => {
  if (req.authUser) {
    res.redirect('/');
  } else {
    res.render('signup');
  }
};

module.exports.handleSignup = async (req, res) => {
  const fname = req.body.fname || '';
  const lname = req.body.lname || '';
  const gender = req.body.gender || '';
  const dob = req.body.dob || '';
  const branch = req.body.branch || '';
  const year = req.body.year || '';
  const email = req.body.email || '';
  const phone = req.body.phone || '';
  const domain = req.body.domain || '';
  const address = req.body.address || '';
  const password = req.body.password || '';

  // check valid email
  conn.query('SELECT id FROM users WHERE email=?', [email], (err, result) => {
    if (err) {
      // throw err;
      return res.status(401).json({
        error: true,
        message: err,
      });
    }
    // if email exists
    if (result.length) {
      return res.status(401).json({
        error: true,
        message: 'This email already exists!',
      });
    } else {
      bcrypt.hash(password, 10, (err, hashPass) => {
        if (err) {
          // throw err;
          return res.status(500).json({
            error: true,
            message: err,
          });
        } else {
          conn.query(
            'INSERT INTO users (fname, lname, gender, dob, branch, year, email, phone, domain, address, password) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
            [
              fname,
              lname,
              gender,
              dob,
              branch,
              year,
              email,
              phone,
              domain,
              address,
              hashPass,
            ],
            (err, result) => {
              if (err) {
                // throw err;
                return res.status(400).json({
                  error: true,
                  message: err,
                });
              }
              conn.query(
                'SELECT id, email FROM users WHERE email=?',
                [email],
                (err, userInfo) => {
                  if (err) {
                    return res.status(400).json({ error: true, message: '' });
                  }
                  const token = jwt.sign(
                    {
                      username: userInfo[0].name,
                      userId: userInfo[0].id,
                    },
                    process.env.JWT_SECRET_KEY
                  );
                  res.cookie('access-token', token);
                  return res.status(201).json({
                    error: false,
                    message: 'Registered',
                    isLoggedIn: true,
                  });
                }
              );
            }
          );
        }
      });
    }
  });
};
