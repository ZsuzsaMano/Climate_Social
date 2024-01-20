const {User} =require( "../models/userSchema.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth.js");

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const signup = (req, res, next) => {
  let { name, email, password } = req.body;
  let errors = [];
  if (!name) {
    errors.push(" name is required");
  }
  if (!email) {
    errors.push("email is required");
  }
  if (!emailRegexp.test(email)) {
    errors.push("email is invalid");
  }
  if (!password) {
    errors.push(" passowrd is required");
  }
  if (errors.length > 0) {
    return res.status(422).json(errors[0]);
  }

  User.findOne({ email: email })

    .then((user) => {
      if (user) {
        return res.status(422).json("email already exists");
      } else {
        const user = new User({
          name: name,
          email: email,
          password: password,
        });
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then((response) => {
                res.status(200).json({
                  success: true,
                  result: response,
                  message: user,
                });
              })
              .catch((err) => {
                res.status(500).json("Something went wrong");
              });
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).json("Something went wrong");
    });
};

const signin = (req, res) => {
  let { email, password } = req.body;
  let errors = [];
  if (!email) {
    errors.push("email is required");
  }

  if (!emailRegexp.test(email)) {
    errors.push("invalid email");
  }

  if (!password) {
    errors.push("password is required");
  }

  if (errors.length > 0) {
    res.status(500).json(errors[0]);
  }

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(404).json("user not found");
      } else {
        bcrypt.compare(password, user.password).then((isMatch) => {
          if (!isMatch) {
            return res.status(400).json(" password incorrect");
          }

          const options = { expiresIn: 2592000 };
          const payload = {
            user: user.email,
            id: user._id,
          };
          jwt.sign(payload, process.env.TOKEN_SECRET, options, (err, token) => {
            if (err) {
              res.status(500).json(err.message);
            } else {
              return res.status(200).json({
                success: true,
                token: token,
                message: user,
              });
            }
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).json("errors");
    });
};

module.exports={signin, signup}
