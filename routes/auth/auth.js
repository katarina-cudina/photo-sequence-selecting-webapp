const auth = require("express").Router();
const { signUp, logIn } = require("../../queries/auth");
const withAuth = require("../../middleware");
const { expireToken } = require("../../queries/helpers/authHelper");
auth.post("/signUp", signUp);
auth.post("/logIn", logIn);
auth.get("/verifyToken", withAuth, (req, res) => res.sendStatus(200));
auth.get("/logout", expireToken);

module.exports = auth;
