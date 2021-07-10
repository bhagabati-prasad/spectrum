const conn = require('../config/connection');

module.exports = (req, res) => {
  if (req.authUser) {
    console.log(req.userData.userId);
    conn.query(
      'SELECT * FROM users WHERE id=?',
      [req.userData.userId],
      (err, result) => {
        if (err) {
        }
        if (result.length) {
          console.log(result[0].fname);
          res.render('profile');
        }
      }
    );
  } else {
    res.redirect('/');
  }
};
