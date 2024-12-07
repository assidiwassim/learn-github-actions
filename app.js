const express = require("express");
const app = express();
const port = 3001;
const calculate = require('./calculate')


app.get("/", (req, res) => {
  res.status(200).send({sum:calculate.sum(1,1)});
});

app.get("/users", (req, res) => {
  res.status(200).send({users:[]});
});

app.listen(port, () => {
  console.log(`App listening on port  ${port} `);
});


