import mysql from 'mysql2';





export const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: 'Cashback7*',
    database: 'loja-tipscode'
})