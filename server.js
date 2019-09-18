//=======================best way to connect to mongodb atlas cloud

const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
// const logger = require("morgan");
// const Data = require("./data");

//endpoints
// const businessRoute = require("./business.route");
// const projectRoute = require("./project.route");
// const formRoute = require("./form.route");

const API_PORT = 3001;
const app = express();
app.use(cors());
// const router = express.Router();

// this is our MongoDB database
const dbRoute = `mongodb+srv://default-user:default_users_psw_010203@cluster0-dqmij.gcp.mongodb.net/portfolio`;

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(logger("dev"));

// app.use("/business", businessRoute);
// app.use("/project", projectRoute);
// app.use("/form", formRoute);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
