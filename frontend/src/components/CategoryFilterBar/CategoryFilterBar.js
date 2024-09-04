import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import useFetchCategories from '../../hooks/useFetchCategories'; // Adjust the import path if necessary

const CategoryFilterBar = ({ onChange }) => {
    const { categories, loading, error } = useFetchCategories();
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        // Convert selectedOptions to an array of category IDs and pass to parent
        const selectedCategoryIds = selectedOptions.map(option => option.value);
        onChange(selectedCategoryIds);
    }, [selectedOptions, onChange]);

    if (loading) return <div>Loading categories...</div>;
    if (error) return <div>Error loading categories: {error}</div>;

    // Function to flatten hierarchical categories into an array of options
    const flattenCategories = (categories, parentLabel = '') => {
        return categories.reduce((acc, category) => {
            const label = parentLabel ? `${parentLabel} > ${category.name}` : category.name;
            acc.push({ value: category.id, label });
            if (category.children) {
                acc = acc.concat(flattenCategories(category.children, label));
            }
            return acc;
        }, []);
    };

    // Map categories to react-select options
    const options = flattenCategories(categories);

    return (
        <div className="category-filter-bar">
            <Select
                isMulti
                options={options}
                value={selectedOptions}
                onChange={setSelectedOptions}
                placeholder="Select categories..."
                className="react-select-container"
                classNamePrefix="react-select"
            />
        </div>
    );
};

export default CategoryFilterBar;
