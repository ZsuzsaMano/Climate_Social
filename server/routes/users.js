const express = require("express");
const {
  getUsers,
  postUser,
  deleteUser,
  updateUser,
} = require("../controllers/users.js");


const router = express.Router();

//@route GET api/users
//@desc GET All users
router.get("/", getUsers);

//@route POST api/users
//@desc Create an user
router.post("/", postUser);

//@route PATCH api/users/:id
//@desc update an user
router.patch("/:id", updateUser);

//@route DELETE api/users/:id
//@desc DELETE a user
router.delete("/:id", deleteUser);

module.exports = router;