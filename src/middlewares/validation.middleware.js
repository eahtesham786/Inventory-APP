import { body, validationResult } from "express-validator";
const validateRequest = async (req, res, next) => {
  //validate the data
  // let errors = [];
  // const { name, price, imageUrl } = req.body;
  // if (!name || name.trim() == "") {
  //   errors.push("Name is required");
  // }
  // if (!price || parseFloat(price) < 1) {
  //   errors.push("Price must be a positive value");
  // }
  // try {
  //   const validUrl = new URL(imageUrl);
  // } catch (err) {
  //   errors.push("URL is invalid");
  // }

  // if (errors.length > 0) {
  //   return res.render("new-product", { errorMessage: errors });
  // }

  console.log(req.body);
  //Setup rules for validation
  const rules = [
    body("name").notEmpty().withMessage("Name is required."),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be a positive value."),
    body("imageUrl").isURL().withMessage("URL is invalid."),
  ];
  //Run those rules
  await Promise.all(rules.map((rule) => rule.run(req)));

  //Check if there are any errors after running the rules.
  const validationErrors = validationResult(req);
  console.log(validationErrors);

  //If errors exists return the error message.
  if (!validationErrors.isEmpty()) {
    return res.render("new-product", {
      errorMessage: validationErrors.array()[0].msg,
    });
  }
  next();
};
export default validateRequest;
