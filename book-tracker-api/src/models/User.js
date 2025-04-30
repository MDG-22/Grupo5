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
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    totalBooksRead:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    totalPagesRead:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    // BOOK CHAMPIONS => RAMA PROFE TIENE EJEMPLO DE ENUMS
    // role:{
    //     type: DataTypes.ENUM(Object.values(UserRoles)),
    //     allowNull: false,
    //     defaultValue: UserRoles.USER,
    // }
})