const express = require("express");
const { SignUpModel } = require("../modules/SignUp-M");
const route = express.Router();
const bcrypt = require("bcrypt");

route.get("/", (req, resp) => {
  resp.json({
    message: "This is an sigin page!!",
  });
});

route.post("/", async (req, resp) => {
  console.log(req.body);

  try {
    const email = (req.body.email).toLowerCase()
    const existingUser = await SignUpModel.findOne({ email: email });

    if (!existingUser) {
      const Salt = bcrypt.genSaltSync(10);
      const HashPassword = bcrypt.hashSync(req.body.password, Salt);

      const data = new SignUpModel({
        address: req.body.address,
        city: req.body.city,
        email: email,
        name: req.body.name,
        number: req.body.number,
        password: HashPassword,
        pincode: req.body.pincode,
        state: req.body.state,
        salt: Salt,
      });

      await data.save();
      return resp.status(201).json({ message: "Signup successful!" });
    } else {
      console.log("User already exists");
      return resp.status(409).json({ message: "User already exists" });
    }
  } catch (e) {
    console.log("An internal server error occurred:", e);
    return resp.status(500).json({ message: "Internal server error" });
  }
});

module.exports = route;
