import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"megabar23",
    database:"yogaagma.ch"
})