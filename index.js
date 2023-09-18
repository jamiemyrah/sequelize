const mysql2 = require("mysql2/promise");

// get a connection
const connection = await mysql2.createConnection({
  user: "jamirah",
  password: "J@mirah",
  port: 3306,
});

// connect
await connection.connect();

// run one or more queries on the connection
const result = await connection.query(
  `CREATE DATABASE IF NOT EXISTS socialnetwork`
);
console.log(result);

// close the connection
await connection.end();
