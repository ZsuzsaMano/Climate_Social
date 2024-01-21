const {User} = require ("../models/userSchema.js");

const getUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(404).json(err.message));
};

const postUser = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(409).json(err.message));
};

const updateUser = (req, res) => {
  if (req.body.myFavorites) {
    User.updateOne(
      { _id: req.params.id },
      { $set: { myFavorites: JSON.stringify(req.body.myFavorites) } }
    )
      .then((res) => console.log("favorites updated"))
      .catch((err) => res.status(404).json("error updating favorites"));
  } else {
    User.updateOne(
      { _id: req.params.id },
      {
        $set: { name: req.body.name, email: req.body.email, img: req.body.img },
      }
    )
      .then((res) => console.log("user info updated"))
      .catch((err) => res.status(404).json("error updating user info"));
  }
};


const deleteUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => user.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json(err.message));
};

const getMe = (req,res)=>{
  res.status(200).json(req.user);
}

module.exports={getUsers, updateUser, postUser, deleteUser, getMe}
