const Contact = require('../model/Contact');

module.exports = async (req, res) => {
  try {
    console.log(req.body);
    const con = new Contact({ ...req.body });
    const msg = await con.save();
    console.log(msg);
    res.status(200).json({ message: 'message sent!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
