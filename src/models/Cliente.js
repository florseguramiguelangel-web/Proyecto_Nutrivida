import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Cliente = sequelize.define(
"Cliente",
{
    id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    telefono: {
    type: DataTypes.STRING(20),
    allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "clientes",
    timestamps: false,
  }
);

export default Cliente;