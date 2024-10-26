const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");

const { SignUpModel } = require("../modules/SignUp-M");

route.get("/", (req, resp) => {
  resp.json({
    message: "This is an sigin page!!",
  });
});

route.post("/", async (req, resp) => {
  console.log(req.body);

  try {
    const existingUser = await SignUpModel.findOne({ email: req.body.email });

    console.log(existingUser);

    // JWT BAAD MAI LAG DEGA MAI 1-2 Days mai and would get it updated

    if (existingUser) {
      console.log("Login successful!");

      return resp.status(201).json({ message: "Login successful!" });
    } else {
      console.log("Please first create an account!");
      return resp
        .status(409)
        .json({ message: "Please first create an account!" });
    }
  } catch (e) {
    console.log("An internal server error occurred:");
    console.log("An internal server error occurred:", e);
    return resp.status(500).json({ message: "Internal server error" });
  }
});

module.exports = route;
