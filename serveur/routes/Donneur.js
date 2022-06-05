const express = require("express");
const router = express.Router();
const {Donneur } = require("../models");
//var bcrypt = require('bcryptjs');

router.post("/registration2", async (req, res) => {
  const Donneu = req.body;
  await Donneur.create(Donneu);
  res.json(Donneu);
});

router.post("/login", async (req, res) => {
  const { Email, Password } = req.body;

  const user = await Donneur.findOne({ where: {Email: Email } });

  if (!user) res.json({ error: "Ce compte n'existe pas" });

  bcrypt.compare(Password, user.Password).then((match) => {
    if (!match) res.json({ error: "Mauvaise combinaison de l'Email et du mot de passe" });
  

    res.json("VOUS ÊTES CONNECTÉ!!!");
  });
});

module.exports = router;