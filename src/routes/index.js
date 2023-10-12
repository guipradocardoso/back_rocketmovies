const { Router } = require("express");

const usersRouter = require("./users.routes")
const tagsRoutes = require("./tags.routes")
const notessRoutes = require("./notes.routes")

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/tags", tagsRoutes);
routes.use("/notes", notessRoutes);

module.exports = routes;