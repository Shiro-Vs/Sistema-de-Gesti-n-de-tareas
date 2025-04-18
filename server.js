const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "HTML/inicio.html"));
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "HTML/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
