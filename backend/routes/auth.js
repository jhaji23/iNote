const express = require("express");
const router = express.Router();

const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createUser",
  body("email").isEmail(),
  body("name").notEmpty(),
  body("password").notEmpty(),
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
        .then((x) => res.json(x))
        .catch((e) => {
          console.log(e);
          res.send({ errors: e.message });
        });
    }
  }
);

module.exports = router;
