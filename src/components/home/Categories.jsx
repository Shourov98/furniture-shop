import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/img/Category/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error:', error));
    }, []); // useEffect ensures fetch runs once

    return (
        <div className="w-full py-8 px-4">
            <h2 className="text-center text-2xl font-bold mb-8 text-gray-800">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categories.length > 0 && categories.map((category, index) => (
                    <div
                        className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
                        key={index}
                    >
                        <img
                            className="w-20 h-20 object-cover rounded-full mb-2"
                            src={category.image}
                            alt={category.name}
                        />
                        <h3 className="text-center text-lg font-semibold text-gray-700">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
