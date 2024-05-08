import express from 'express';
import {PORT} from './config.js';
import restaurantRoutes from './routes/restaurants.routes.js'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
// Para que pueda entender los datos json
app.use(express.json());
app.use(restaurantRoutes);

app.listen(PORT)
console.log('Server on port', PORT)