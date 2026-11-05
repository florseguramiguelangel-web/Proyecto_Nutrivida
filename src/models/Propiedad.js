import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Propietario = sequelize.define(
"Propietario",
{
    id_propietario: {
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
    tableName: "propietarios",
    timestamps: false,
}
);

export default Propietario;