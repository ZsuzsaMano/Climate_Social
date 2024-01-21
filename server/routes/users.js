const express = require("express");
const {
  getUsers,
  postUser,
  deleteUser,
  updateUser,
  getMe,
} = require("../controllers/users.js");
const { jwtAuth } = require("../utils/auth.js");


const router = express.Router();

//@route GET api/users
//@desc GET All users
router.get("/", getUsers);

//@route GET api/users
//@desc GET All users
router.get("/me",jwtAuth, getMe);

//@route POST api/users
//@desc Create an user
router.post("/", postUser);

//@route PATCH api/users/:id
//@desc update an user
router.patch("/:id", jwtAuth, updateUser);

//@route DELETE api/users/:id
//@desc DELETE a user
router.delete("/:id", jwtAuth, deleteUser);

module.exports = router;