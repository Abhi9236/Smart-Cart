import React, { useState } from 'react';
import InfoBox from './InfoBox';
import ProductCard from './Productcard';
import VendorCard from './VendorCard';
import CartSummary from './CartSummary';

const DashboardOwner = ({ products, vendors, setProducts, setVendors }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, Demo User!</h1>
        <p>Manage your inventory and orders from your dashboard</p>
      </div>

      <div className="info-boxes">
        <InfoBox icon="📦" label="Available Products" value={products.length} desc="Products available" />
        <InfoBox icon="🛒" label="Cart Items" value={cartItemsCount} desc={cartItemsCount === 0 ? "Cart is empty" : "Items in cart"} />
        <InfoBox icon="💰" label="Cart Value" value={`$${cartValue.toFixed(2)}`} desc="Total cart value" />
        <InfoBox icon="🏪" label="Local Vendors" value={vendors.length} desc="Vendors available" />
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <h2>Local Vendors</h2>
          <span className="section-badge">{vendors.length} vendors available</span>
        </div>
        <div className="vendors-grid">
          {vendors.map((v, i) => (
            <VendorCard key={i} {...v} onAddToCart={addToCart} />
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Available Products</h2>
        <div className="products-grid">
          {products.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <h3>No products available</h3>
              <p>Add products through vendor dashboards to see them here.</p>
            </div>
          ) : (
            products.map((p) => (
              <ProductCard key={p.id} {...p} onAddToCart={addToCart} />
            ))
          )}
        </div>
      </div>

      {cart.length > 0 && (
        <div className="dashboard-section">
          <h2>Cart Summary</h2>
          <CartSummary items={cart} total={cartValue} />
          <div className="cart-actions">
            <button className="btn btn-outline" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardOwner;
