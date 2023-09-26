"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TasksController_1 = require("./controller/TasksController");
var routes = (0, express_1.Router)();
routes.get("/home", function (request, response) {
    return response.json({ message: "Hello Turma!" });
});
routes.get("/tasks", TasksController_1.getTasks);
routes.post("/tasks", TasksController_1.saveTask);
routes.get("/tasks/:id", TasksController_1.getTask);
routes.put("/tasks/:id", TasksController_1.updateTask);
routes.delete("/tasks/:id", TasksController_1.deleteTask);
routes.patch("/tasks/:id", TasksController_1.finishedTask);
exports.default = routes;
//# sourceMappingURL=routes.js.map