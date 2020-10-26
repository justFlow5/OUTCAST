import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';
import colors from 'colors';

const app = express();
dotenv.config();

connectDB();

app.get('/', (req, res) => {
    res.send('API IS RUNNING');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/product/:id', (req, res) => {
    const product = products.find((product) => product._id === req.params.id);
    res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `server running in ${process.env.NODE_ENV}  mode on port: ${PORT}`
            .yellow.bold
    )
);
