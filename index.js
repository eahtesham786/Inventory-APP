import express from "express";
import path from "path";
import ejs from "ejs";
import ejsLayouts from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";
import validationMiddleware from "./src/middlewares/validation.middleware.js";
const server = express();
//parse form data
server.use(express.urlencoded({ extended: true }));
//view engine setup
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

server.use(ejsLayouts);

// create an instance of ProductController
const productController = new ProductController();
server.get("/", productController.getProducts);
server.get("/new", productController.getAddForm);
server.get("/update-product/:id", productController.getUpdateProductView);
server.post("/new", validationMiddleware, productController.addNewProduct);
server.use(express.static("src/views"));
// return res.send('Welcome to Inventory App');
server.listen(3400);
console.log("Server is listening on port 3400");
