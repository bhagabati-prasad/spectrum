const User = require('../model/User');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  try {
    const reqToken = req.headers['auth-token'];
    const decoded = jwt.verify(reqToken, process.env.SECRET_TOKEN);
    if (decoded) {
      const data = {
        ...req.body.user,
        social: { ...req.body.social },
        education: {
          edu1: {
            ...req.body.education[0],
          },
          edu2: {
            ...req.body.education[1],
          },
          edu3: {
            ...req.body.education[2],
          },
        },
        language: { ...req.body.language },
        project: [...req.body.project],
      };
      const updateUser = await User.findByIdAndUpdate(decoded.id, data, {
        new: true,
      });
      res.json({ isLoggedIn: true, user: updateUser });
    } else {
      res.json({ error: 'invalid token' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};
