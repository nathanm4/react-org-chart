import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';



// Log the variables to ensure they are loaded
// console.log('MYSQL_HOST:', process.env.MYSQL_HOST);
// console.log('MYSQL_USER:', process.env.MYSQL_USER);
// console.log('MYSQL_PASSWORD:', process.env.MYSQL_PASSWORD);
// console.log('MYSQL_DATABASE:', process.env.MYSQL_DATABASE);

// Create a connection pool using environment variables
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,  // Hardcoded to see if the issue persists ... fixed 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export async function getPeople() {
    const [rows] = await pool.query("SELECT * FROM people")
    return rows;
}

export async function getPerson(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM people 
    WHERE id = ?`, [id])
    return rows[0];
}

// const result = await getPerson(100)
// console.log(result)