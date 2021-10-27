const express = require("express");
const mysql = require("mysql")
const app = express()
const cors = require("cors")

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "miles",
    host: "localhost",
    password: "password",
    database: "yogaclass"
});

app.post("/admin", (req, res) => {
    const title = req.body.title
    const location = req.body.location
    const price = req.body.price;

    db.query('INSERT INTO class (title, location, price) VALUES (?,?,?)',
    [title, location, price], 
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("values inserted");
        }
    })
})

app.get('/home', (req, res) => {
    db.query("SELECT * FROM class", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.put('/update', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    db.query("UPDATE class SET title = ? WHERE id = ?", 
    [title, id], 
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// app.delete()
 
app.listen(3001, () => {
    console.log('server is running on port 3001')
});