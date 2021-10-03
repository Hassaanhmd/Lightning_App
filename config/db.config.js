'use strict'

require('dotenv').config()

const mysql = require('mysql2')

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

connection.getConnection(
  function (err) {
    if (err) {
      console.log('!!! Cannot Connect to Database !!!')
      throw err
    } else {
      console.log('Database Connected')
    }
  }
)

module.exports = connection
