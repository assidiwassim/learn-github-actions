const express = require("express");
const app = express();
const port = 3001;
const calculate = require('./calculate')


app.get("/", (req, res) => {
  res.send("Sum = ",calculate.sum(1,1));
});

app.listen(port, () => {
  console.log(`App listening on port  ${port} `);
});


