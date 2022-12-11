const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Initialisations
const app = express();
const PORT = process.env.PORT || 3333;

// Middlewares
app.use(cors());

// Controllers
app.get("/", (req, res) => {
  const dummyJson = { name: "Shubham", isAdmin: true };
  res.status(200).send(dummyJson);
});

app.listen(PORT, () => {
  console.log(`Server stated on port: ${PORT}`);
});
