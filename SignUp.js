import React, { useState } from 'react';

const SignUp = ({ role, onSignUp, setPage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState(role || 'owner');

  return (
    <div className="auth-container">
      <div className="auth-image-section" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85&fit=crop&auto=format')"}}>
        <div className="auth-image-overlay">
          <h2>Create Your Account</h2>
          <p>Join our platform and start managing your inventory.</p>
        </div>
      </div>
      <div className="auth-form-section">
        <div className="auth-card">
          <div className="auth-logo">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="#7749F8" rx="6"/>
              <path d="M8 10h8M8 14h5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className="auth-title">Smart Cart</h2>
          <p className="auth-subtitle">Create your account</p>
          <form onSubmit={e => { e.preventDefault(); onSignUp(); }}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Account Type</label>
              <select value={selectedRole} onChange={e => setSelectedRole(e.target.value)}>
                <option value="owner">Shop Owner - Manage inventory</option>
                <option value="vendor">Vendor - Supply products</option>
              </select>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary btn-full" type="submit">Sign Up</button>
          </form>
          <p className="auth-footer">
            Already have an account?{' '}
            <span className="link" onClick={() => setPage('signin')}>Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
