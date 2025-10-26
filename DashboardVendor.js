import React, { useState } from 'react';
import InfoBox from './InfoBox';

const DashboardVendor = ({ products, vendors, setProducts, setVendors }) => {

  // Form visibility state
  const [showAddForm, setShowAddForm] = useState(false);

  // New product form data
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    quantity: ''
  });

  // Handle form submission
  const handleAddProduct = (e) => {
    e.preventDefault();

    const productToAdd = {
      id: Date.now(), // Simple ID generator
      name: newProduct.name,
      category: newProduct.category,
      desc: `${newProduct.name} - ${newProduct.category} category`,
      price: parseFloat(newProduct.price),
      quantity: parseInt(newProduct.quantity)
    };

    setProducts([...products, productToAdd]);

    // Reset form
    setNewProduct({ name: '', category: '', price: '', quantity: '' });
    setShowAddForm(false);

    alert('Product added successfully!');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, Vendor!</h1>
        <p>Manage your product catalog and fulfill orders</p>
      </div>

      <div className="info-boxes">
        <InfoBox icon="📒" label="Catalog Products" value={products.length} desc="Products listed" />
        <InfoBox icon="📦" label="Orders" value="0" desc="Pending orders" />
        <InfoBox icon="💵" label="Revenue" value="$0.00" desc="Total revenue" />
        <InfoBox icon="💬" label="Messages" value="0" desc="Unread messages" />
      </div>

      <div className="vendor-sections">
        {/* PRODUCT CATALOG SECTION WITH ADD BUTTON */}
        <div className="vendor-section-card">
          <div className="section-header-with-action">
            <h3>📒 Product Catalog</h3>
            <button 
              className="btn btn-primary btn-small" 
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? '✕ Close Form' : '+ Add New Product'}
            </button>
          </div>

          {/* ADD PRODUCT FORM - Shows when button is clicked */}
          {showAddForm && (
            <div className="add-product-form-container">
              <h4 className="form-heading">Add New Product</h4>
              <form className="add-product-form" onSubmit={handleAddProduct}>
                <div className="form-group-inline">
                  <label>Product Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Fresh Oranges"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group-inline">
                  <label>Category</label>
                  <input
                    type="text"
                    placeholder="e.g., Fruits"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    required
                  />
                </div>

                <div className="form-row-two">
                  <div className="form-group-inline">
                    <label>Price ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group-inline">
                    <label>Quantity</label>
                    <input
                      type="number"
                      placeholder="0"
                      value={newProduct.quantity}
                      onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    ✓ Add Product
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline" 
                    onClick={() => {
                      setShowAddForm(false);
                      setNewProduct({ name: '', category: '', price: '', quantity: '' });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* PRODUCT LIST */}
          <div className="vendor-product-list-table">
            <div className="product-list-header">
              <span>Product</span>
              <span>Category</span>
              <span>Price</span>
              <span>Quantity</span>
            </div>
            {products.map((p) => (
              <div key={p.id} className="product-list-row">
                <span className="product-name-col">{p.name}</span>
                <span className="product-cat-col">{p.category}</span>
                <span className="product-price-col">${p.price.toFixed(2)}</span>
                <span className="product-qty-col">{p.quantity} units</span>
              </div>
            ))}
          </div>
        </div>

        {/* ORDER FULFILLMENT SECTION */}
        <div className="vendor-section-card">
          <h3>📦 Order Fulfillment</h3>
          <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
            <p>No orders yet</p>
            <small>Orders will appear here when shop owners place them</small>
          </div>
        </div>

        {/* MESSAGING SECTION */}
        <div className="vendor-section-card">
          <h3>💬 Direct Messaging</h3>
          <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
            <p>No messages yet</p>
            <small>Messages from shop owners will appear here</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardVendor;
