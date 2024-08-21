export default class ProductModel {
  constructor(_id, _name, _desc, _price, _imageUrl) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }

  static get() {
    return products;
  }
}
var products = [
  new ProductModel(
    1,
    "Apple",
    "Description1 for the products",
    30,
    "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg"
  ),
  new ProductModel(
    2,
    "Nokia",
    "Description2 for the products",
    40,
    "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-lumia-520-2.jpg"
  ),
  new ProductModel(
    3,
    "Oneplus",
    "Description3 for the products",
    25,
    "https://fdn2.gsmarena.com/vv/bigpic/oneplus-11.jpg"
  ),
  new ProductModel(
    4,
    "Google",
    "Description4 for the products",
    55,
    "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro-xl-.jpg"
  ),
];
