const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// Dummy product list

const products = [
  {
    id: 1,
    name: 'Iphone 14 Plus',
    price: 1000,
    description: 'Description for Product 1',
    image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.news_app_ed.jpg'
  },
  {
    id: 2,
    name: 'Samsung s20 Ultra',
    price: 2050,
    description: 'Description for Product 2',
    image: 'https://m-cdn.phonearena.com/images/articles/355580-image/galaxy20ultra2.jpg'
  },
  {
    id: 3,
    name: 'Samsung s23 Ultra',
    price: 20,
    description: 'Description for Product 2',
    image: 'https://myshops.ae/image/cache/catalog/tovar/517/EY6Gn0IjrlOzjIQ3PsghuwNBDTIOUFjE7Vsoewjo8k9-900x900.png'
  },
  {
    id: 4,
    name: 'Iphone 13 pro max',
    price: 910,
    description: 'Description for Product 2',
    image: 'https://cartswing.com/media/catalog/product/cache/0c4fa28778f3babacffe1a07a499f2ca/a/p/apple_iphone-13-pro-max-sim-lock-256gb.jpg'
  },
  // Add more products as needed
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
