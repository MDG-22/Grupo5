import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { User } from "./User";
import { Book } from "./Book";

export const Lecture = sequelize.define("lecture", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: User,
            key: "id"
        }
    },
    bookId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Book,
            key: "id"
        }
    },
    rating:{
        type: DataTypes.INTEGER,
    },
    pageCount:{
        type: DataTypes.INTEGER,
    },
    dateStarted:{
        type: DataTypes.DATE,
    },
    fechaFinished:{
        type: DataTypes.DATE,
    },
    status:{
        type: DataTypes.ENUM("Reading", "Plan to read", "Read"),
        allowNull: false,
    }
})