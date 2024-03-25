const mysql = require('mysql2/promise');
const config = require('../config');
async function query(sql) {
  try {
    const connection = await mysql.createConnection(config.db);
    const [results,] = await connection.execute(sql);

    // connection.end((err)=>{
    //   if(err){
    //     console.log("error in end connection")
    //   }
    // });
    return results;
  }
  catch (err) {
    console.log("query error");
    throw err;
  }
}

async function createConnectionA() {
  if (connection) {
    return connection
  }
  connection = await mysql.createConnection(config.db);
  return connection;
}
module.exports = {
  query
}