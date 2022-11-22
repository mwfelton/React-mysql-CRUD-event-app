const mysql = require("mysql");
const express = require("express");
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"megabar23",
    database:"yogaagma.ch"
});

app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO workshop-directory (title) VALUES ('Surya Kriya')"
    db.query(sqlInsert, (err, result) => {
        res.send("penis")
    })
})

app.listen(3001, () => {
    console.log('server is running on port 3001')
});
