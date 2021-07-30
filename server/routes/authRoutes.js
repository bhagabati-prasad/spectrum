const { Router } = require('express');
const router = Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    res.status(500).json({ error });
  }
});

router.patch('/user/update', async (req, res) => {
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
});

router.post('/getuser', async (req, res) => {
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
});

module.exports = router;
