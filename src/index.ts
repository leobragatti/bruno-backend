import "reflect-metadata";
import * as express from "express";
import { AppDataSource } from "./data-source";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import routes from "./routes";

<<<<<<< HEAD
const application = AppDataSource.initialize().then(async () => {
=======
AppDataSource.initialize().then(async () => {
>>>>>>> 73c1355d798107019451c86b391d862ce0d28b75
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(routes);
  app.listen(3333);
});
<<<<<<< HEAD

module.exports = application;
=======
>>>>>>> 73c1355d798107019451c86b391d862ce0d28b75
