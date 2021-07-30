const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
  fname: String,
  mname: String,
  lname: String,
  dob: String,
  age: String,
  gender: String,
  email: String,
  password: String,
  phone: String,
  domain: String,
  about: String,
  address: String,
  social: {
    facebook: String,
    instagram: String,
    twitter: String,
    linkedin: String,
    github: String,
    website: String,
  },
  education: {
    edu1: {
      from: String,
      to: String,
      college: String,
      branch: String,
    },
    edu2: {
      from: String,
      to: String,
      college: String,
      branch: String,
    },
    edu3: {
      from: String,
      to: String,
      college: String,
      branch: String,
    },
  },
  language: {
    speaking: String,
    frameworks: String,
    skills: [{ name: String, rating: String }],
  },
  project: [{ title: String, description: String, link: String }],
});

userSchema.methods.generateToken = async function () {
  try {
    const token = jwt.sign(
      { id: this._id.toString() },
      process.env.SECRET_TOKEN
    );
    return token;
  } catch (error) {
    console.log(error);
  }
};

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = model('user', userSchema);
module.exports = User;
