import { pool } from '../db.js';

export const getRestaurants = async (req, res) => {

    const {rows} = await pool.query('SELECT * FROM restaurants')
    res.json(rows);
};

export const getRestaurant = async (req, res) => {
    const {id} = req.params

    const {rows} = await pool.query('SELECT * FROM restaurants where id = $1', [id]);
    
    if(rows.length === 0) {
        return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.json(rows[0]);
};

export const createRestaurant = async (req, res) => {
    try {
        const data = req.body

        const { rows } = await pool.query('INSERT INTO restaurants (id, rating, name, site, email, phone, street, city, state, lat, lng) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
        [data.id, data.rating, data.name, data.site, data.email, data.phone, data.street, data.city, data.state, data.lat, data.lng])
    
        return res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteRestaurant = async (req, res) => {
    const {id} = req.params
    const {rowCount} = await pool.query('DELETE FROM restaurants WHERE id = $1 RETURNING *', [id]);

    if(rowCount === 0){
        return res.status(404).json({ message: 'Restaurant not found' });
    }

    return res.sendStatus(204);
};

export const updateRestaurant = async (req, res) => {
    const {id} = req.params;
    const data = req.body;

    const { rows } = await pool.query('UPDATE restaurants set rating = $1, name = $2, site = $3, email = $4, phone = $5, street = $6, city = $7, state = $8, lat = $9, lng = $10 where id = $11 RETURNING *',
    [data.rating, data.name, data.site, data.email, data.phone, data.street, data.city, data.state, data.lat, data.lng, id]       
    )

    return res.json(rows[0])
};