import path from "path";
import ProductModel from "../models/product.model.js";
class ProductController {
  getProducts(req, res) {
    const products = ProductModel.get();
    res.render("products.ejs", { products: products });
    console.log(products);
    console.log(path.resolve());
    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "products.html")
    // );
  }

  getAddForm(req, res) {
    return res.render("new-product", { errorMessage: null });
  }
  addNewProduct(req, res) {
    //access data from form
    console.log(req.body);
    ProductModel.add(req.body);
    let products = ProductModel.get();
    return res.render("products.ejs", { products: products });
  }
  getUpdateProductView(req, res, next) {
    //If product exists than return view
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (productFound) {
      res.render("update-product", {
        product: productFound,
        errorMessage: null,
      });
    }
    //If product doesn't exist then return error
    else {
      res.status(401).send("Product not found");
    }
  }
}
export default ProductController;
