import React, { useState, useEffect } from 'react';
import styles from './ItemsPage.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';

const SearchAndCards = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8000/api/products');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				// Ensure data is an array
				if (Array.isArray(data)) {
					setCards(data);
				} else {
					console.error('Expected an array but received:', data);
				}
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
	
		fetchData();
	}, []);

    const filteredCards = cards.filter(card =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className={styles.cardContainer}>
                {filteredCards.map((card) => (
                    <Card
                        key={card.id}
                        image={card.image}
                        name={card.name}
                        price={card.price}
                        rating={card.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchAndCards;
