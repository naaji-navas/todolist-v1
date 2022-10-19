const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");



app.get("/", (req, res) => {
  let today = new Date();
  if (today.getDay() === 6 || today.getDay() === 0) {
    res.send("Yay! It's the weekend!");
  } else {
    res.send("Boo! I have to go to work!");
  }
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
