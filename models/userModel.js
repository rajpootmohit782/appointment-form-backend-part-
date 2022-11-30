const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "db4free.net",
  user: "rajpootmohit782",
  password: "singhmohit",
  database: "shopback",
});

exports.insertUser = (name, email, phone, callback) => {
  console.log("hit");
  const sql = `INSERT INTO users (name, email, phone) VALUES (?, ?, ?)`;
  const values = [name, email, phone];
  connection.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

exports.getUser = (callback) => {
  console.log("getuser hit");
  const sql = "SELECT * FROM users";
  connection.query(sql, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(result);
    }
  });
};

exports.deleteUser = (id, callback) => {
  const sql = `DELETE FROM users WHERE id = ?`;
  const values = [id];
  connection.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};
