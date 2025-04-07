const { faker } = require("@faker-js/faker");
// import mysql from "mysql2/promise";
const mysql = require("mysql2");
const express = require("express");
const app = express();

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Piyush321@",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
/** 
// Inserting NEW data
let q = "INSERT INTO user (id, username, email, password) VALUES ? ";
// let users = [
//   ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//   ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// ];

let data = [];
for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser()); //100 fake users
}
*/


// let getRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// };

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});



// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();