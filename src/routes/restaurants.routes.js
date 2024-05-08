import {Router} from 'express'
import { createRestaurant, deleteRestaurant, getRestaurant, getRestaurants, updateRestaurant } from '../controllers/restaurants.controllers.js';

const router = Router();

router.get('/restaurants', getRestaurants);

router.get('/restaurants/:id', getRestaurant);

router.post('/restaurants', createRestaurant);

router.delete('/restaurants/:id', deleteRestaurant)

router.put('/restaurants/:id', updateRestaurant)

export default router;