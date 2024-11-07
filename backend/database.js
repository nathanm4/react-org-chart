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


export const getChildren = async (id) => {
    const [rows] = await connection.query('SELECT * FROM people WHERE hasParent = 1 AND id IN (SELECT child_id FROM relationships WHERE parent_id = ?)', [id]);
  
    // Map children to desired format
    const children = rows.map(person => ({
      id: person.id,
      person: {
        id: person.id,
        avatar: person.avatar,
        name: person.name,
        title: person.title,
        totalReports: person.totalReports,
      },
      hasChild: person.hasChild === 1,
      hasParent: person.hasParent === 1,
      children: [] // Initially empty, will populate later if needed
    }));
  
    return children;
  };


// Function to get parent of a person
export const getParent = async (id) => {
    const [rows] = await connection.query('SELECT * FROM people WHERE hasChild = 1 AND id IN (SELECT parent_id FROM relationships WHERE child_id = ?)', [id]);
  
    if (rows.length > 0) {
      const person = rows[0]; // Assuming one parent
      return {
        id: person.id,
        person: {
          id: person.id,
          avatar: person.avatar,
          name: person.name,
          title: person.title,
          totalReports: person.totalReports,
        },
        hasChild: person.hasChild === 1,
        hasParent: false, // Root has no parent
        children: [], // Children will be populated later if needed
      };
    }
    return null; // No parent found
  };

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

const result = await getPerson(100)
console.log(result)