const router = require("express").Router();
const { Biz, bizValidation, bizLoginValidaition } = require("../models/biz");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const bizUserAuth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

router.get("/", (req, res) => {
  res.send("Ok. ze oved.");
});

router.post("/sign-up", async (req, res) => {
  try {
    const { error } = bizValidation(req.body);

    if (error) {
      res.status(400).json({
        error: "Biz Validation ERROR",
        message: error.details[0].message,
      });
      return;
    }

    const passwordUser = await bcrypt.hash(req.body.password, 12);
    const emailUser = await Biz.findOne({ email: req.body.email });

    const bizUser = await new Biz({
      ...req.body,
      emailUser,
      password: passwordUser,
    }).save();

    if (emailUser) {
      res.status(400).json({
        error: "Email conflict",
        message: "Email is already in use.",
      });
      return;
    }

    res.status(201).json({
      message: "Biz maneger create.",
      detailes: bizUser,
    });
  } catch (err) {
    res.json({
      error: "Network ERROR",
      message: err.message,
    });
  }
});

router.post("/login/", async (req, res) => {
  try {
    const { error } = bizLoginValidaition(req.body);

    if (error) {
      res.status(400).json({
        message: "error validation, please chack your input",
        error: error.details[0].message,
      });
      return;
    }

    // בדיקה עבור ח.פ של מנהל
    let bizUser = await Biz.findOne({ bizId: req.body.bizId });
    if (!bizUser) {
      res.status(400).send("Please chek your input.");
      return;
    }
    // בדיקה עבור סיסמת מנהל
    const passwordComper = await bcrypt.compare(
      req.body.password,
      bizUser.password
    );
    if (!passwordComper) {
      res.status(400).send("Please check your input.");
      return;
    }

    const token = jwt.sign(
      {
        id: bizUser._id,
      },
      JWT_SECRET_KEY
    );

    res.json({
      message: `Hey ${bizUser.fullName}, your ID biz is: ${bizUser.bizId}`,
      yourToken: token,
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
});

module.exports = router;
