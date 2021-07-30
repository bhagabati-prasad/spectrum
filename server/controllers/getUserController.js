const User = require('../model/User');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  try {
    const reqToken = req.body.token;
    if (reqToken) {
      const decoded = jwt.verify(reqToken, process.env.SECRET_TOKEN);
      if (decoded) {
        const user = await User.findById(decoded.id);
        res.json({ user });
      }
      res.json({ error: 'invalid token' });
    } else {
      res.json({ error: 'no token found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};
