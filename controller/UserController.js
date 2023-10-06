const { User } = require("../models/userModel");

exports.fetchUserById = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.fetchUserBySpecificId = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.fetchAlltheUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch {
    res.send("error");
  }
};
