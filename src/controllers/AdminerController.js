const Adminer = require("../models/Adminer");
const bcrypt = require("bcryptjs");
const tokenGenerator = require("../config/tokenGenerator");

module.exports = {
  async register(req, res) {
    const { nickname, password_hash, email } = req.body;

    try {
      const user = await Adminer.findOne({ where: { email: email } });
      if (user) {
        return res.status(400).send({ error: "user already exist" });
      }
      const newuser = await Adminer.create({ nickname, password_hash, email });
      const token = await tokenGenerator(newuser);

      newuser.password_hash = undefined;
      return res.send({ newuser, token });
    } catch (err) {
      return res.status(500).send({ error: "internal error" });
    }
  },
  async login(req, res) {
    try {
      const { password, email } = req.body;

      if (!email || !password) {
        return res.status(400).send({ error: "User not found" });
      }
      const user = await Adminer.findOne({ where: { email: email } });
      if (!user) {
        return res.status(400).send({ error: "User not found" });
      }
      if (!password) {
        return res.status(400).send({ error: "Invalid password" });
      }
      if (!email) {
        return res.status(400).send({ error: "Invalid email" });
      }

      const validate = await bcrypt.compare(password, user.password_hash);
      if (!validate) {
        return res.status(400).send({ error: "email or password invalid" });
      }

      const token = tokenGenerator(user);
      user.password_hash = undefined;
      return res.send({ user, token });
    } catch (e) {
      return res.status(500).send(e);
    }
  },
  async validate(req, res) {
    const id = req.userId;
    const user = await Adminer.findByPk(id);
    if (!user) {
      return res.status(401).send({ error: "User not authorized" });
    }

    const nickname = req.userName;
    const email = req.userEmail;
    res.status(200).send({ id, nickname, email });
  },
};
