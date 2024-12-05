const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const products = [
  {
    image_url: 'https://i.imgur.com/LKPM2yG.jpg',
    product_name: 'Serum Hydrating',
    description: 'Serum ringan yang menghidrasi dan mengencangkan kulit.'
  },
  {
    image_url: 'https://i.imgur.com/trSFrDM.jpg',
    product_name: 'Toner Brightening',
    description: 'Toner yang mencerahkan dan meratakan warna kulit.'
  },
  {
    image_url: 'https://i.imgur.com/BTa1iLt.jpg',
    product_name: 'Glow2Glow Moisturizer',
    description: 'Pelembab yang memberikan cahaya sehat pada kulit.'
  },
  {
    image_url: 'https://i.imgur.com/8JgbaLr.jpg',
    product_name: 'Cleanser Soothing',
    description: 'Pembersih lembut yang menenangkan dan membersihkan kulit.'
  },
  {
    image_url: 'https://i.imgur.com/4vffmjX.jpg',
    product_name: 'Serum Anti-Aging',
    description: 'Serum yang mengurangi tampilan garis halus dan kerutan.'
  },
  {
    image_url: 'https://i.imgur.com/9Gahrfs.jpg',
    product_name: 'Cream Pore Minimizing',
    description: 'Krim yang mengurangi tampilan pori-pori.'
  }
];

app.get('/home', (req, res) => {
  res.json({
    home: products
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
