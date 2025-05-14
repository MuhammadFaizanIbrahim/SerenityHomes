import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SingleProductPage from './pages/SingleProductPage';
import CollectionPage from './pages/CollectionPage';
import AdminLayout from './components/admin/AdminLayout';
import LoginPage from './components/admin/LoginPage';
import AdminProductsPage from './components/admin/ProductsPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });

    document.title = 'Serenity Home | Beautiful Home Decor';
    
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    document.documentElement.classList.add('font-sans');
    const style = document.createElement('style');
    style.textContent = `
      .font-serif {
        font-family: 'Playfair Display', serif;
      }
      body {
        font-family: 'Inter', sans-serif;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white text-stone-800">
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Header />
                <ProductsPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Header />
                <SingleProductPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/collections"
            element={
              <>
                <Header />
                <CollectionPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <AboutPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <ContactPage />
                <Footer />
              </>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/products" replace />} />
            <Route path="products" element={<AdminProductsPage />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;