// Test MySQL connection
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from root directory
dotenv.config({ path: join(__dirname, '../../.env') });

console.log('Testing MySQL connection...');
console.log('Config:', {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD ? '***' : 'NOT SET',
  database: process.env.MYSQL_DATABASE,
});

try {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'university_management',
  });
  
  console.log('✅ MySQL connection successful!');
  
  // Test query
  const [rows] = await connection.query('SELECT DATABASE() as db');
  console.log('Connected to database:', rows);
  
  await connection.end();
  process.exit(0);
} catch (error: any) {
  console.error('❌ MySQL connection failed:', error.message);
  process.exit(1);
}
