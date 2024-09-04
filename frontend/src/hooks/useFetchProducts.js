// src/hooks/useFetchProducts.js
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../apiConfig';

const useFetchProducts = (selectedCategories) => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/products`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
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

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array means this runs once on mount

    // Filter products based on selected categories
    const filteredCards = cards.filter(product =>
        selectedCategories.length === 0 || 
        product.category_ids.some(id => selectedCategories.includes(id))
    );

    return { cards: filteredCards, loading, error, fetchData };
};

export default useFetchProducts;
