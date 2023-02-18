module.exports = (app) => {
  const api = require("../controllers/api.controller.js");

  var router = require("express").Router();

  // Retrieve a single User with id
  router.get("/get/id", api.findOne);
  // Retrieve all User
  router.get("/get_all", api.findAll);
  // Create a new User
  router.post("/add", api.create);
  // Update a User with id
  router.put("/update/id", api.update);
  // Delete a User with id
  router.delete("/del/id", api.delete);
  // Delete all User
  router.delete("/del_all", api.deleteAll);

  // http://localhost:5000/crud/api/{router?}
  app.use("/crud/api", router);
};
