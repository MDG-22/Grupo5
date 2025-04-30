import express from 'express';

import { PORT } from './config.js';
import { sequelize } from './db.js';

import "./models/index.js";

import router from './routes/book.routes.js';

const app = express();

try{
    app.use(express.json())
    app.listen(PORT);
    app.use(router);

    await sequelize.sync();

    console.log(`Server is listening port ${PORT}`);

} catch (error){
    console.log(`There was an error on initialization`);
}
