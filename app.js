//required packages

const express = require("express");
const layouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const connectFlash = require("connect-flash");
const router = require("./routes/index");
app = express();
app.use(layouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");

app.use(connectFlash());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.use("/", router);
app.listen(app.get("port"), () => {
  console.log("experss has started..");
});
