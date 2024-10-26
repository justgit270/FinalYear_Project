const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json());

const LoginInRoute = require("./routes/Login-R")
const SignupRoute = require("./routes/Signup-R")

app.use("/login",LoginInRoute)
app.use("/signup",SignupRoute)

app.get("/", (req, resp) => {
    resp.json({
      message: "This is Home page!!",
    });
  });



app.listen(4500, () => {
  console.log("Server Ready");
});
