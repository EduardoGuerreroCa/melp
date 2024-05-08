import express from 'express';
import {PORT} from './config.js';
import restaurantRoutes from './routes/restaurants.routes.js'

const app = express()

app.use(restaurantRoutes);

app.listen(PORT)
console.log('Server on port', PORT)