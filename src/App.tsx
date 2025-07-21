import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marketplace from './components/Marketplace';
import Blog from './components/Blog';
import Directory from './components/Directory';
import Events from './components/Events';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import Webstore from './components/Webstore';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

const HomePage = () => (
  <>
    <Hero />
    <Marketplace />
    <Blog />
    <Directory />
    <Events />
  </>
);

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/dashboard" element={
            isAdminLoggedIn ? 
              <AdminDashboard /> : 
              <AdminLogin onLogin={setIsAdminLoggedIn} />
          } />
          <Route path="/*" element={
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/webstore" element={<Webstore />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
