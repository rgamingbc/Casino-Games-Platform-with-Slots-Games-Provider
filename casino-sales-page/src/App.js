import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingTelegram from './components/FloatingTelegram';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <Features />
      <About />
      <Contact />
      <Footer />
      <FloatingTelegram />
    </div>
  );
}

export default App;
