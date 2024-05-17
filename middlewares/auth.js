const { readData } = require("../utils/data/parse");
const findAllUsers = async (req, res, next) => {
  req.usersArray = await readData("./assets/users.json");
  next();
};
module.exports = { findAllUsers };
