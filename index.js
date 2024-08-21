import express from "express";
import path from "path";
import ejs from "ejs";
import ejsLayouts from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";

const server = express();
//view engine setup
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

server.use(ejsLayouts);

// create an instance of ProductController
const productController = new ProductController();
server.get("/", productController.getProducts);
server.use(express.static("src/views"));
// return res.send('Welcome to Inventory App');
server.listen(3400);
console.log("Server is listening on pert 3400");
