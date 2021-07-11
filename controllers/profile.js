const conn = require('../config/connection');

module.exports = (req, res) => {
  if (req.authUser) {
    conn.query(
      'SELECT * FROM users WHERE id=?',
      [req.userData.userId],
      (err, result) => {
        if (err) {
        }
        if (result.length) {
          res.render('profile', { user: result[0], name: 'john' });
        }
      }
    );
  } else {
    res.redirect('/');
  }
};
