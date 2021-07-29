const { Router } = require('express');
const router = Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
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
});

router.post('/signup', async (req, res) => {
  try {
    const ifUser = await User.find({ email: req.body.email });
    if (!ifUser.length) {
      const registerUser = new User({ ...req.body });
      // create token
      const token = await registerUser.generateToken();
      // create new user
      const registeredUser = await registerUser.save();
      res.status(200).json({ isLoggedIn: true, user: registeredUser, token });
    } else {
      res.json({ isLoggedIn: false, error: 'this email already exists!' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

router.patch('/', async (req, res) => {
  console.log(req.body);
});

module.exports = router;
