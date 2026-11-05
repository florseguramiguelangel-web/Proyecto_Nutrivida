
import dotenv from "dotenv";
import app from "./app.js";
import sequelize from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
try {
    await sequelize.authenticate();

    console.log("Conexión a PostgreSQL establecida");

    app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
} catch (error) {
    console.error("Error al iniciar el servidor:", error.message);
    process.exit(1);
}
}

iniciarServidor();
