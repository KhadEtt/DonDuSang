const express = require("express");
const router = express.Router();
const {RendezVouss } = require("../models");

router.get("/", async (req, res) => {
  const listOfRendezVouss = await RendezVouss.findAll();
  res.json(listOfRendezVouss);
});

router.post("/", async (req, res) => {
  const RendezVou = req.body;
  await RendezVouss.create(RendezVou);
  res.json(RendezVou);
});

module.exports = router;