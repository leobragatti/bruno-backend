"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var Tasks_1 = require("./entity/Tasks");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "mahmud.db.elephantsql.com",
    port: 5432,
    username: "nwwaukfs",
    password: "RfoAC1pexWS_hcVdCqPFuJEiQhFkczBD",
    database: "nwwaukfs",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Tasks_1.Tasks],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map