const router = require("express").Router();
BasicOperationRoutes = require("./basicOperation");

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/calculator", (req, res) => {
  res.render("../public/index.html");
});
router.use("/calculate", BasicOperationRoutes);

module.exports = router;
