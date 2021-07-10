module.exports = (req, res) => {
  res.clearCookie('access-token');
  res.redirect('/');
};
