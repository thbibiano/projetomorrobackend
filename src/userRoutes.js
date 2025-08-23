const { Router } = require("express");
const routes = Router();
const authRouter = require("./middlewares/autentication");

//ROUTES FOR USERS
const AdminerController = require("./controllers/AdminerController");
routes.post("/register", AdminerController.register);
routes.post("/login", AdminerController.login);
routes.get("/validate", authRouter, AdminerController.validate);

module.exports = routes;
