import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to Our E-Commerce Site</h2>
        <p>Browse our products and make your purchase today!</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
