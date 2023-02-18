const express = require("express");
const app = express();
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors(corsOptions));

app.use(express.json()); // parse requests of content-type - application/json


app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded


const db = require("./Server_MVC/models");

db.sequelize
.sync()
.then(() => {
    console.log("The Server is connected to the DB  ");})
.catch((err) => {
    console.log("Failed to connect to the DB: " + err.message);
  });
//optional
// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Router of HomePage
app.get("/home", (req, res) => {
  res.json({ message: "Welcome to CRUD_API application. NJM" });
});

require("./Server_MVC/routes/api.routes")(app);

// set port:5000, listen for requests
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
