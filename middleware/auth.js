const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.cookies['access-token'];
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (decoded) {
        req.userData = decoded;
        req.authUser = true;
      }
    }
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: 'Invalid session!',
    });
  }
  next();
};

module.exports = auth;
