const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { createHandler } = require("graphql-http/lib/use/express");
const connectDB = require("./config/db");
const schema = require("./schema/schema");
const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(
  "/graphql",
  createHandler({
    schema,
  })
);

app.listen(port, console.log("Server running on port: " + port));
