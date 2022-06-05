const express = require("express");
const router = express.Router();
const {Register } = require("../models");

router.get("/", async (req, res) => {
  const listOfRegister = await Register.findAll();
  res.json(listOfRegister);
});

router.post("/", async (req, res) => {
  const Registe = req.body;
  await Register.create(Registe);
  res.json(Registe);
});

module.exports = router;