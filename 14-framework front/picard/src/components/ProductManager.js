import { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const ProductManager = ({ filter, setFilter, categories, setCategories }) => {
    const [products, setProducts] = useState([]);

    const handleSave = (newProduct) => {
        setProducts([...products, newProduct]);
        if (!categories.includes(newProduct.category)) {
            setCategories([...categories, newProduct.category]);
        }
    };

    const handleDelete = (index) => {
        setProducts(products.filter((_, i) => i !== index));
    };

    const handleUpdateQuantity = (index, newQuantity) => {
        setProducts(products.map((product, i) =>
            i === index ? { ...product, quantity: newQuantity } : product
        ));
    };

    const handleUpdateRating = (index, newRating) => {
        setProducts(products.map((product, i) =>
            i === index ? { ...product, rating: newRating } : product
        ));
    };

    const filteredProducts = filter ? products.filter(p => p.category === filter) : products;

    return (
        <div>
            <ProductForm onSave={handleSave} />
            <ProductList
                products={filteredProducts}
                onDelete={handleDelete}
                onUpdateQuantity={handleUpdateQuantity}
                onUpdateRating={handleUpdateRating}
            />
        </div>
    );
};

export default ProductManager;
