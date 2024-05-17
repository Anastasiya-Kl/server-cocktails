const authRouter = require("express").Router();
const { register, login, validation } = require("../controllers/auth.js");
const { findAllUsers } = require("../middlewares/auth.js");

authRouter.post("/auth/register", findAllUsers, register);
authRouter.post("/auth/login", findAllUsers, login);
authRouter.get("/auth/validation", validation);

module.exports = authRouter;
