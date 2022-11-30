const userModel = require("../models/userModel");

exports.insertUser = (req, res) => {
  const { name, email, phone } = req.body;
  console.log(email);
  userModel.insertUser(name, email, phone, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error inserting new user into database");
    } else {
      res.status(200).send("New user added to database");
    }
  });
};

exports.getuser = (req, res) => {
  userModel.getUser((result) => {
    res.status(200).send(result);
  });
};
exports.deleteUser = (req, res) => {
  const id = req.params.id;

  userModel.deleteUser(id, (err, result) => {
    if (err) {
      res.status(500).send({ message: "Error deleting user", error: err });
    } else {
      res
        .status(200)
        .send({ message: "User deleted successfully", result: result });
    }
  });
};
