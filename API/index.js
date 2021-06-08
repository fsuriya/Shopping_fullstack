require("dotenv").config();
const express = require("express");
const database = require('./database');

const app = express();

const PORT = process.env.PORT || 3000;

// Connect Database
const testingDB = async () => {
  try {
    await database.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
// End Connect Database

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/user', (req, res) => {
    database.query(`select * from Account where id = ${req.query.id}`, {type: database.QueryTypes.select})
    .then(result => {
        res.send(result[0][0]);
    })
    .catch(err => {
        console.log(err);
        res.status(500);
    })
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    testingDB();
});
