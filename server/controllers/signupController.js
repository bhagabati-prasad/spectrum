const User = require('../model/User');

module.exports = async (req, res) => {
  try {
    const ifUser = await User.find({ email: req.body.email });
    if (!ifUser.length) {
      const registerUser = new User({
        ...req.body,
        language: {
          speaking: '',
          frameworks: '',
          skills: [{ name: '', rating: '' }],
        },
        project: [
          { title: '', description: '', link: '' },
          { title: '', description: '', link: '' },
        ],
      });
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
};
