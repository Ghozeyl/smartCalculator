const router = require("express").Router();
const commentControler = require("../controllers/baiscOperation");
const { body } = require("express-validator");

router.get(
  "/sum",
  commentControler.sum,
  commentControler.indexView
);
router.get(
    "/sub",
    commentControler.sub,
    commentControler.indexView
  );
  router.get(
    "/div",
    commentControler.div,
    commentControler.indexView
  );
  router.get(
    "/mult",
    commentControler.mult,
    commentControler.indexView
  );
module.exports = router;
