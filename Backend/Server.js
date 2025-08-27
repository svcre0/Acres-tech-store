// server.js
const express = require ('express');
const cors = require('cors');
const db = require('./db'); 


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// --- GET All Products ---
app.get('/api/products', (req, res) => {

  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const products = rows.map(row => {
      const images = JSON.parse(row.images);
      return {
        id: row.id,
        name: row.name,
        price: row.price,
        originalPrice: row.originalPrice,
        image: images[0] || '/api/placeholder/300/300', 
        category: row.category,
        condition: row.condition,
        rating: row.rating,
        inStock: !!row.inStock,
        featured: !!row.featured
      };
    });

    res.json(products);
  });
});


// --- Image Placeholder Redirect ---
app.get('/api/placeholder/:width/:height', (req, res) => {
  const { width, height } = req.params;
  res.redirect(`https://via.placeholder.com/${width}x${height}`);
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

