const express = require("express");
const routes = require("./routes");
const userRoutes = require("./userRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("./models");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/", routes);
app.use("/", userRoutes);
app.listen(process.env.PORT || 3000);
