const express = require("express");
const productRouter = require("./product-routes");
const Product = require("./product");
const app = express();
const port = 3000;

// add json parser middleware
app.use(express.json());

// add product routes
app.use("/product", productRouter);

// make sure to create the database "exercises" and the product table
/**
 * create database exercises;
 * use exercises;
 * create table Products (id integer primary key auto_increment, name varchar(255) not null, price decimal(12,2));
 */

// start server
app.listen(port, () => {
  console.log("Server started...");
});
