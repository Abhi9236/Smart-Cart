import React from 'react';

const VendorCard = ({ name, company, email, phone, products, onAddToCart }) => (
  <div className="vendor-card-large">
    <div className="vendor-header">
      <div className="vendor-avatar">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" stroke="#fff" strokeWidth="2"/>
          <path d="M4 20v-2a6 6 0 0112 0v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div>
        <h4>{name}</h4>
        <p className="vendor-company">{company || name}</p>
      </div>
    </div>
    <div className="vendor-contact">
      {email} | {phone}
    </div>
    <div className="vendor-products-section">
      <h5>Products ({products.length})</h5>
      <div className="vendor-product-list">
        {products.map((p) => (
          <div key={p.id} className="vendor-product-item">
            <div>
              <div className="vendor-product-name">{p.name}</div>
              <div className="vendor-product-meta">{p.category} • {p.desc}</div>
            </div>
            <div className="vendor-product-actions">
              <span className="vendor-product-price">${p.price.toFixed(2)}</span>
              <button 
                className="btn btn-small btn-primary"
                onClick={() => onAddToCart(p)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default VendorCard;
