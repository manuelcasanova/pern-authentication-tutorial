const express = require("express");
const app = express();
const PORT = 8001;
const cors = require("cors");

//Middleware

app.use(express.json()) //req.body
app.use(cors())

//ROUTES



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});