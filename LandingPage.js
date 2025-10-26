import React from 'react';

const LandingPage = ({ onGetStarted }) => (
  <div className="landing-page">
    <div className="landing-hero" style={{backgroundImage: "url('https://images.unsplash.com/photo-1580674287405-80cd25164894?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
      <div className="hero-overlay">
        <h1 className="landing-title">
          Intelligent Inventory<br />
          <span className="landing-title-accent">Management System</span>
        </h1>
        <p className="landing-subtitle">
          Streamline your supermarket operations with real-time inventory tracking,<br />
          automated alerts, and seamless vendor communication.
        </p>
      </div>
    </div>

    <div className="landing-roles">
      <div className="role-card">
        <div className="role-icon role-icon-owner">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="url(#gradient-owner)"/>
            <path d="M8 10h8M8 14h5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="gradient-owner" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#7749F8'}}/>
                <stop offset="100%" style={{stopColor:'#9D7BFF'}}/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h3>Shop Owner</h3>
        <p className="role-desc">Manage your inventory and streamline operations</p>
        <ul className="role-features">
          <li>Real-time inventory tracking with live updates</li>
          <li>Automated low stock and expiry alerts</li>
          <li>Order management and vendor communication</li>
          <li>Analytics and profit margin tracking</li>
        </ul>
        <button className="btn btn-owner" onClick={() => onGetStarted('owner')}>
          Get Started as Shop Owner →
        </button>
      </div>

      <div className="role-card">
        <div className="role-icon role-icon-vendor">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="url(#gradient-vendor)"/>
            <circle cx="12" cy="8" r="4" stroke="#fff" strokeWidth="2"/>
            <path d="M4 20v-2a6 6 0 0112 0v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="gradient-vendor" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#2CC36B'}}/>
                <stop offset="100%" style={{stopColor:'#4DD98A'}}/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h3>Vendor</h3>
        <p className="role-desc">Supply products and manage order fulfillment</p>
        <ul className="role-features">
          <li>Product catalog management with pricing</li>
          <li>Order processing and fulfillment tracking</li>
          <li>Direct communication with shop owners</li>
          <li>Sales analytics and revenue insights</li>
        </ul>
        <button className="btn btn-vendor" onClick={() => onGetStarted('vendor')}>
          Get Started as Vendor →
        </button>
      </div>
    </div>

    <div className="landing-features">
      <h2 className="section-title">Powerful Features for Modern Retail</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h4>Real-time Analytics</h4>
          <p>Track inventory turnover, profit margins, and sales trends with live data updates</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔔</div>
          <h4>Smart Alerts</h4>
          <p>Automated notifications for low stock, expiry warnings, and out-of-stock items</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h4>Direct Messaging</h4>
          <p>Communicate seamlessly with vendors or shop owners for efficient order management</p>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
