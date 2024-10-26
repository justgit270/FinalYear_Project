const mongoose = require("mongoose");

mongoose
  .connect("MOGO_URL")
  .then(() => {
    console.log("SignUp Database connected sucessfully");
  });

const SignupSchema = mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  number: { type: String, required: true },
  password: { type: String, required: true },
  pincode: { type: String, required: true },
  state: { type: String, required: true },
  salt :  {type: String, required: true }
});

const SignUpModel = mongoose.model("SignUp", SignupSchema);

module.exports = { SignUpModel };
