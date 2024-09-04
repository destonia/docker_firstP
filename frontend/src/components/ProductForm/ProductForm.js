import React, { useState } from 'react';
import styles from './ProductForm.module.css';

const ProductForm = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [picture, setPicture] = useState('');
	const [price, setPrice] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name && picture && price) {
			const product = { name, picture, price };
			handleProductSubmit(product);
			setName('');
			setPicture('');
			setPrice('');
		}
	};

	const handleProductSubmit = (product) => {
		console.log('Product submitted:', product);
		// Here you can handle the form submission, e.g., send the product data to a server
	};
	

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.field}>
				<label htmlFor="name">Name</label>
				<input
				type="text"
				id="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
				/>
			</div>
			<div className={styles.field}>
				<label htmlFor="picture">Picture URL</label>
				<input
				type="text"
				id="picture"
				value={picture}
				onChange={(e) => setPicture(e.target.value)}
				required
				/>
			</div>
			<div className={styles.field}>
				<label htmlFor="price">Price</label>
				<input
				type="number"
				id="price"
				value={price}
				onChange={(e) => setPrice(e.target.value)}
				required
				/>
			</div>
			<button type="submit" className={styles.submitButton}>
				Add Product
			</button>
		</form>
	);
};

export default ProductForm;
