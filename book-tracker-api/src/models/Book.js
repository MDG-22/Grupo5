import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { Author } from "./Author.js";

export const Book = sequelize.define("book", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    authorId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Author,
            key: "id"
        }
    },
    pages:{
        type: DataTypes.INTEGER
    },
    genres:{
        type: DataTypes.STRING
    },
    summary:{
        type: DataTypes.STRING
    },
    imageUrl:{
        type: DataTypes.STRING
    }
},  {
        timestamps: false
    }
);