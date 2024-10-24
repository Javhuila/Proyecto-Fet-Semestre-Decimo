import {connect, connection} from "mongoose";

const conn = {
  isConected : false
}

export async function connectDB() {

  if(conn.isConected) return;

  const db= await connect('mongodb://localhost/xuahomeschool');
  console.log(db.connection.db.databaseName);
  conn.isConected = db.connections[0].readyState
}

connection.on('connected', () =>{
  console.log('mongo is conected');
})

connection.on('error', (err) =>{
  console.log('mongo is conected', err);
})