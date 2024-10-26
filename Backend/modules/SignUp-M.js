const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://harshdhakate551:harsh@cluster0.ml1mudv.mongodb.net/Job-Portal")
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
