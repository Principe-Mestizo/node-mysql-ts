import mysql from 'mysql2/promise';
import { envs } from '../../config/envs';

export const mysqlDB = mysql.createPool({
    host: envs.MYSQL_HOST,
    user: envs.MYSQL_USER,
    database: envs.MYSQL_DB,
    password: envs.MYSQL_PASSWORD,
    port: envs.MYSQL_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Función para verificar la conexión
export async function checkDatabaseConnection() {
    try {
        const connection = await mysqlDB.getConnection();
        console.log('Successfully connected to the database');
        connection.release();
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}
