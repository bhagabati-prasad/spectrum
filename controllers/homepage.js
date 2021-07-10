module.exports = (req, res) => {
  if (req.authUser) {
    res.render('index', { isLoggedIn: true });
  } else {
    res.render('index', { isLoggedIn: false });
  }
};
