const mysql = require("mysql");


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password123", 
  database: "userDB",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to database.");
  }
});

module.exports = db;
