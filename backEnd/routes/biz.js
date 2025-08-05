const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Ok. ze oved.");
});

module.exports = router;
