import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Filter from './components/Filter';

const App = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('');
    const [categories, setCategories] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
        if (!categories.includes(product.category)) {
            setCategories([...categories, product.category]);
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
        <Router>
            <div style={{ textAlign: 'center' }}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h1>Bienvenue sur le gestionnaire de produits Picard</h1>
                                <nav style={{ marginTop: '20px' }}>
                                    <Link to="/add-product" style={{ marginRight: '15px', color: 'blue' }}>Ajouter un produit</Link>
                                    <Link to="/product-list" style={{ color: 'blue' }}>Liste des produits</Link>
                                </nav>
                            </div>
                        }
                    />
                    <Route
                        path="/add-product"
                        element={<ProductForm onSave={addProduct} />}
                    />
                    <Route
                        path="/product-list"
                        element={
                            <>
                                <Filter categories={categories} onFilter={setFilter} />
                                <ProductList
                                    products={filteredProducts}
                                    onDelete={handleDelete}
                                    onUpdateQuantity={handleUpdateQuantity}
                                    onUpdateRating={handleUpdateRating}
                                />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
