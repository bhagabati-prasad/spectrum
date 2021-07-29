const { verify } = require('jsonwebtoken');
// const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    // const reqToken = req.headers['x-access-token'];
    // if (!reqToken) {
    //   res.json({ isLoggedIn: false, error: 'no authentication token found' });
    // } else {
    //   const decoded = verify(reqToken, process.env.SECRET_TOKEN);
    //   if (!decoded) {
    //     res.json({ isLoggedIn: false, error: 'token verification failed' });
    //   } else {
    //     const user = await User.findOne({ id: decoded.id });
    //     req.isLoggedIn = true;
    //     req.userId = user.id;
    //     req.user = user;
    //     req.userToken = reqToken;
    //     next();
    //   }
    // }
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = auth;
