import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import MainBody from '../components/MainBody/MainBody';
import styles from '../App.module.css';
const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
	  	<div className={styles.content}>
			<Sidebar />
			<MainBody />
		</div>	
      <Footer />
    </div>
  );
};

export default Home;
