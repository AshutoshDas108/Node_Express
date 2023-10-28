const express = require("express")

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from Home page");
} );

app.get("/about", (req, res) => {
    return res.send("Hello from About Page");
});

app.get("/contact", (req, res) => {
    return res.send("Hello from contact page");
});

app.listen(3000, () => console.log("Sever Started"));