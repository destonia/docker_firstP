import React from 'react';
import styles from './Sidebar.module.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from '../Login/Login';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
