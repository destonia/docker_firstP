import React from 'react';
import styles from './Card.module.css';

const Card = ({ image, name, price, rating }) => (
	<div className={styles.card}>
		<img src={image} alt={name} className={styles.image} />
		<h3>{name}</h3>
		<p>{price}</p>
		<div className={styles.rating}>
			{[...Array(5)].map((_, index) => (
				<span key={index} className={index < rating ? styles.filledStar : styles.emptyStar}>
					★
				</span>
			))}
		</div>
	</div>
);

export default Card;
