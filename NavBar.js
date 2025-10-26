import React from 'react';

const NavBar = ({ isLoggedIn, onLogout, setPage, role }) => (
  <nav className="navbar">
    <div className="navbar-brand" onClick={() => setPage('landing')}>
      <div className="navbar-logo">
        <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
          <rect width="24" height="24" fill="#7749F8" rx="6"/>
          <path d="M8 10h8M8 14h5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="navbar-title">Smart Cart</span>
    </div>
    <div className="navbar-actions">
      <button className="btn btn-outline btn-small" onClick={() => setPage('landing')}>
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style={{marginRight: '6px'}}>
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Home
      </button>
      {isLoggedIn ? (
        <>
          {role === 'owner' && <span className="navbar-label">Shop Owner Dashboard</span>}
          {role === 'vendor' && <span className="navbar-label">Vendor Dashboard</span>}
          <button className="btn btn-outline" onClick={onLogout}>Logout</button>
        </>
      ) : (
        <>
          <button className="btn btn-outline" onClick={() => setPage('signin')}>Sign In</button>
          <button className="btn btn-primary" onClick={() => setPage('signup')}>Sign Up</button>
        </>
      )}
    </div>
  </nav>
);

export default NavBar;
