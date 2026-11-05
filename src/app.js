
import express from "express";

const app = express();

// Permite recibir datos en formato JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
res.json({
    mensaje: "Servidor Express funcionando correctamente"
});
});

export default app;
