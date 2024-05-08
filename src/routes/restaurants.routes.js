import {Router} from 'express'

const router = Router();

router.get('/restaurants', (req, res) => {
    res.send('Getting restaurants')
})

router.get('/restaurants/:id', (req, res) => {
    const {id} = req.params
    res.send('Getting restaurant: ' + id)
})

router.post('/restaurants', (req, res) => {
    res.send('Creating restaurants')
})

router.delete('/restaurants/:id', (req, res) => {
    res.send('Deleting restaurants')
})

router.put('/restaurants/:id', (req, res) => {
    const {id} = req.params
    res.send('Updating restaurant: ' + id)
})

export default router;