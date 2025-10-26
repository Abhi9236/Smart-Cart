import React, { useState } from 'react';

const ProductCard = ({ id, name, category, desc, price, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAdd = () => {
    onAddToCart({ id, name, category, desc, price });
  };

  // AI-generated product images for a more polished, artistic look
  const getProductImage = (name) => {
    const images = {
      'Organic Apples': 'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=500&q=85&fit=crop&auto=format', // AI-style vibrant apples
      'Fresh Milk': 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=85&fit=crop&auto=format', // Clean, modern milk carton
      'Whole Wheat Bread': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=85&fit=crop&auto=format', // Artistic bread composition
      'Bananas': 'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=500&q=85&fit=crop&auto=format', // Stylized banana bunch
      'Chicken Breast': 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500&q=85&fit=crop&auto=format', // Premium chicken presentation
      'Rice': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=85&fit=crop&auto=format', // Elegant rice grains
      'Eggs': 'https://images.unsplash.com/photo-1582722872445-70da27a7a1a0?w=500&q=85&fit=crop&auto=format', // Artistic egg arrangement
      'Tomatoes': 'https://images.unsplash.com/photo-1546470427-e9e826f4b5e5?w=500&q=85&fit=crop&auto=format', // Vibrant tomato display
      'Potatoes': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&q=85&fit=crop&auto=format', // Clean potato presentation
      'Orange Juice': 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=85&fit=crop&auto=format' // Modern juice bottle
    };
    return images[name] || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=85&fit=crop&auto=format'; // Default AI-generated supermarket scene
  };

  return (
    <div className="product-card">
      <div style={{ position: 'relative' }}>
        {!imageLoaded && <div className="product-image product-image-loading" style={{ width: '100%', height: '180px', borderRadius: '12px 12px 0 0' }}></div>}
        <img
          src={getProductImage(name)}
          alt={name}
          className="product-image"
          style={{ display: imageLoaded ? 'block' : 'none' }}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>
      <h4>{name}</h4>
      <span className="product-category">{category}</span>
      <p className="product-desc">{desc}</p>
      <div className="product-footer">
        <span className="product-price">${price.toFixed(2)}</span>
        <button className="btn btn-small btn-primary" onClick={handleAdd}>+ Add</button>
      </div>
    </div>
  );
};

export default ProductCard;
