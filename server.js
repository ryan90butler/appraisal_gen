const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");

const app = express();

massive(process.env.DATABASE_URL)
  .then(db => {
  console.log("db is connected");
  app.set("db", db);
  })
  .catch(err => {
  console.warn("Failed to connect:");
  console.error(err);
});

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Server listening on port ${this.address().port}`);
});