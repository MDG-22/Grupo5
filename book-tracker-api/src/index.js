import express from 'express';

import { PORT } from './config.js';
import { sequelize } from './db.js';

// Modelos User, Book, Author, Lecture
import "./models/index.js";

import bookRoutes from './routes/book.routes.js';
import authRoutes from './services/user.services.js'

const app = express();

try{
    app.use(express.json())
    app.listen(PORT);
    app.use(bookRoutes);
    app.use(authRoutes);

    await sequelize.sync();

    console.log(`Server is listening port ${PORT}`);

} catch (error){
    console.log(`There was an error on initialization`);
}
