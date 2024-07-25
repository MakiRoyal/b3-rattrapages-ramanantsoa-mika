import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ onSave }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
        rating: '',
        available: true,
        image: '',
        expiryDate: '',
        addedDate: new Date().toISOString().split('T')[0],
        category: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct({ ...product, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(product);

        setProduct({
            name: '',
            description: '',
            price: '',
            quantity: '',
            rating: '',
            available: true,
            image: '',
            expiryDate: '',
            addedDate: new Date().toISOString().split('T')[0],
            category: ''
        });

        navigate('/product-list');
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Ajouter un produit</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        placeholder="Nom"
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="description" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Description"
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="price" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Prix</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="Prix"
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="quantity" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Quantité</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleChange}
                        placeholder="Quantité"
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="rating" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Note</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={product.rating}
                        onChange={handleChange}
                        placeholder="Note"
                        step="0.1"
                        max="5"
                        required
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="image" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>URL de l'image</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                        placeholder="URL de l'image"
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="expiryDate" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Date limite</label>
                    <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={product.expiryDate}
                        onChange={handleChange}
                        placeholder="JJ-MM-AAAA"
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="category" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Catégorie</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        placeholder="Catégorie"
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>
                        Disponible
                        <input
                            type="checkbox"
                            name="available"
                            checked={product.available}
                            onChange={() => setProduct({ ...product, available: !product.available })}
                            style={{ marginLeft: '10px' }}
                        />
                    </label>
                </div>
                <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>
                    Enregistrer
                </button>
            </form>
            <nav style={{ marginTop: '20px' }}>
                <button onClick={() => navigate('/product-list')} style={{ marginRight: '15px' }}>Voir la Liste des produits</button>
                <button onClick={() => navigate('/')} style={{ marginRight: '15px' }}>Accueil</button>
            </nav>
        </div>
    );
};

export default ProductForm;
