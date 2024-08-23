import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const CartPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Your Cart</h2>
        <p>Your cart is currently empty.</p>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
