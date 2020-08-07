import express from "express";
import db from "./database/connection";
import ClassesController from "./controllers/ClassesController";
import ConnectionControllers from "./controllers/ConnectionsController";

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionControllers();

routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);

routes.post("/connections", connectionsController.create);
routes.get("/connections", connectionsController.index);

export default routes;
