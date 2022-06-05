const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());


const db = require("./models");
//router
const RegisterRouter = require("./routes/Register");
app.use("/Register", RegisterRouter);

const RendezVoussRouter = require("./routes/RendezVouss");
app.use("/RendezVouss", RendezVoussRouter);

const DonneurRouter = require("./routes/Donneur");
app.use("/Donneur", DonneurRouter);

const ConnexionRouter = require("./routes/Connexion");
app.use("/Connexion", ConnexionRouter);


db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});

