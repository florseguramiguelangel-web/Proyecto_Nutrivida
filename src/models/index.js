import { sequelize } from "../config/database.js";

import Propietario from "./propietario.js";
import Cliente from "./Cliente.js";
import Propiedad from "./Propiedad.js";
import Venta from "./Venta.js";

// Un propietario puede tener muchas propiedades
Propietario.hasMany(Propiedad, {
  foreignKey: "id_propietario",
  as: "propiedades",
});

Propiedad.belongsTo(Propietario, {
  foreignKey: "id_propietario",
  as: "propietario",
});

// Un cliente puede realizar muchas compras
Cliente.hasMany(Venta, {
  foreignKey: "id_cliente",
  as: "ventas",
});

Venta.belongsTo(Cliente, {
  foreignKey: "id_cliente",
  as: "cliente",
});

// Una propiedad puede estar relacionada con una venta
Propiedad.hasOne(Venta, {
  foreignKey: "id_propiedad",
  as: "venta",
});

Venta.belongsTo(Propiedad, {
  foreignKey: "id_propiedad",
  as: "propiedad",
});

// Crear las tablas y sus llaves foráneas
async function sincronizarModelos() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a PostgreSQL establecida");

    await sequelize.sync();

    console.log("Modelos sincronizados correctamente");
    console.log("Tablas creadas en PostgreSQL");
  } catch (error) {
    console.error("Error al sincronizar los modelos:", error.message);
  }
}

export {
  sequelize,
  Propietario,
  Cliente,
  Propiedad,
  Venta,
  sincronizarModelos,
};