import 'dotenv/config';
import sql from "mssql";

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

let pool = null;

export async function getConnection() {
    try {
        if (!pool) {
            pool = await sql.connect(config);
            console.log("✅ Conectado a SQL Server");
        }
        return pool;
    } catch (err) {
        console.error("❌ Error conectando a SQL Server:", err);
        throw err;
    }
}


