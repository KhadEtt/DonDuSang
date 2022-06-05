const express = require("express");
const router = express.Router();
const {Connexion } = require("../models");

router.get("/", async (req, res) => {
  const listOfConnexion = await Connexion.findAll();
  res.json(listOfConnexion);
});

router.post("/", async (req, res) => {
  const Connex = req.body;
  await Connexion.create(Connex);
  res.json(Connex);
});

module.exports = router;