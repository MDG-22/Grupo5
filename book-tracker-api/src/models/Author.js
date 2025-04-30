import { DataTypes } from "sequelize";
import { sequelize } from "../db";

export const Author = sequelize.define("author", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    authorName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthplace:{
        type: DataTypes.STRING,
    },
    genres:{
        type: DataTypes.STRING,
    },
    summary:{
        type: DataTypes.STRING
    }
})