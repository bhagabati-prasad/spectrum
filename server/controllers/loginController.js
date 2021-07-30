const User = require('../model/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRes = await User.findOne({ email });
    if (userRes) {
      const isMatched = await bcrypt.compare(password, userRes.password);
      if (isMatched) {
        const token = await userRes.generateToken();
        res.status(200).json({ isLoggedIn: true, user: userRes, token });
      } else {
        res.json({ isLoggedIn: false, error: 'incorrect password' });
      }
    } else {
      console.log("user doesn't exist");
      res.json({ isLoggedIn: false, error: "user doesn't exist" });
    }
  } catch (error) {
    console.log('error: ', error);
    res.status(500).json({ error });
  }
};
