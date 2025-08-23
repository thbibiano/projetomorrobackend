const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) {
    return res.status(401).send({ error: "token not found" });
  }

  const part = authHeaders.split(" ");

  if (!part.length == 2) {
    res.status(401).send({ error: "token error" });
  }

  const [scheme, token] = part;

  if (!/^Bearer$/i.test(scheme)) {
    res.status(401).send({ error: "token mal formated" });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      res.status(401).send({ error: "token invalid" });
    }
    req.userId = decoded.id;
    req.userEmail = decoded.email;
    req.userName = decoded.name;
  });
  return next();
};
