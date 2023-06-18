import mysql from 'mysql'

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Rom@n2053",
  database:"social"
})