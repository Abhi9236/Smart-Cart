import React, { useState } from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import DashboardOwner from './components/DashboardOwner';
import DashboardVendor from './components/DashboardVendor';

function App() {
  const [page, setPage] = useState('landing');
  const [role, setRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [vendors, setVendors] = useState([]);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setPage('signin');
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
    setPage(role === 'owner' ? 'dashboard-owner' : 'dashboard-vendor');
  };

  const handleSignUp = () => {
    setIsLoggedIn(true);
    setPage(role === 'owner' ? 'dashboard-owner' : 'dashboard-vendor');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole(null);
    setPage('landing');
  };

  return (
    <div className="app-container">
      <NavBar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        setPage={setPage}
        role={role}
      />
      {page === 'landing' && <LandingPage onGetStarted={handleRoleSelect} />}
      {page === 'signin' && (
        <SignIn role={role} onSignIn={handleSignIn} setPage={setPage} />
      )}
      {page === 'signup' && (
        <SignUp role={role} onSignUp={handleSignUp} setPage={setPage} />
      )}
      {page === 'dashboard-owner' && <DashboardOwner products={products} vendors={vendors} setProducts={setProducts} setVendors={setVendors} />}
      {page === 'dashboard-vendor' && <DashboardVendor products={products} vendors={vendors} setProducts={setProducts} setVendors={setVendors} />}
    </div>
  );
}

export default App;
