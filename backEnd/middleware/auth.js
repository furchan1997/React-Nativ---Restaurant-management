const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    res
      .status(401)
      .json({ message: "Missing authentication token. Please log in." });
    return;
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET_KEY);
    req.bizUser = payload;
  } catch (err) {
    next(err.message);
  }
};
