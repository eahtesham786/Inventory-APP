import path from "path";
import ProductModel from "../models/product.model.js";
export default class ProductController {
  getProducts(req, res) {
    const products = ProductModel.get();
    res.render("products.ejs", { products: products });
    console.log(products);
    console.log(path.resolve());
    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "products.html")
    // );
  }

  getAddForm(req,res) {
    return res.render("new-product");
  }
}
