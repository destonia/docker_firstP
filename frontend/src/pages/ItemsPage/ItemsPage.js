import React, { useState, useCallback } from 'react';
import styles from './ItemsPage.module.css'; // Ensure path is correct
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import ProductForm from '../../components/ProductForm/ProductForm';
import useFetchProducts from '../../hooks/useFetchProducts';
import CategoryFilterBar from '../../components/CategoryFilterBar/CategoryFilterBar';

const SearchAndCards = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch products based on selected categories
    const { cards, loading, error } = useFetchProducts(selectedCategories);

    // Handle category selection changes
    const handleCategoryChange = useCallback((categoryIds) => {
        setSelectedCategories(categoryIds);
    }, []);

    // Filter cards based on search term
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
            <div className={styles.filtersContainer}>
                <div className={styles.searchBar}>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <div className={styles.categoryFilterBar}>
                    <CategoryFilterBar onChange={handleCategoryChange} />
                </div>
            </div>
            <div className={styles.buttonContainer}>
                {/* <button onClick={() => setIsModalOpen(true)}>Open Modal</button> */}
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div>
                        <h1>Product Form</h1>
                        <ProductForm />
                    </div>
                </Modal>
            </div>
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
