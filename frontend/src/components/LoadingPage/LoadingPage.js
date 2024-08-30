// src/components/LoadingPage.js

import React from 'react';
import styles from './LoadingPage.module.css'; // Import the CSS module

const LoadingPage = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p>Loading, please wait...</p>
        </div>
    );
};

export default LoadingPage;
