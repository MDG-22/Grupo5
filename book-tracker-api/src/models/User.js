import { DataTypes } from "sequelize";
import { sequelize } from "../db";

export const User = sequelize.define("user",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    totalRead:{
        // AVERIGUAR ESTO Y LOS TIMESTAMPS
        // AVERIGUAR DATOS PARA TOTAL LEIDO Y PAGINAS
    }
})