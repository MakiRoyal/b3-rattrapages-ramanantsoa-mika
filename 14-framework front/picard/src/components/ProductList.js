import { useNavigate } from 'react-router-dom';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

const ProductList = ({ products, onDelete, onUpdateQuantity, onUpdateRating }) => {
    const navigate = useNavigate();


    const handleQuantityChange = (e, index) => {
        onUpdateQuantity(index, e.target.value);
    };


    const handleRatingChange = (e, index) => {
        onUpdateRating(index, e.target.value);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Liste des produits</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
                justifyContent: 'center',
                padding: '20px'
            }}>
                {products.map((product, index) => (
                    <div key={index} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px',
                        backgroundColor: '#fff',
                        padding: '15px',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        {product.image && (
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                        )}
                        <h2 style={{ marginTop: '10px' }}>{product.name}</h2>
                        <p>Description : {product.description}</p>
                        <p>Prix : {product.price} €</p>
                        <p>Quantité : {product.quantity}</p>
                        <p>Note : {product.rating}</p>
                        <p>Catégorie : {product.category}</p>
                        <p>Disponible : {product.available ? 'Oui' : 'Non'}</p>
                        <p>Date limite : {formatDate(product.expiryDate)}</p>
                        <p>Date d'ajout : {formatDate(product.addedDate)}</p>

                        <div style={{ marginTop: '10px' }}>
                            <p>Modifier la quantité</p>
                            <input
                                type="number"
                                value={product.quantity}
                                onChange={(e) => handleQuantityChange(e, index)}
                                placeholder="Nouvelle Quantité"
                                style={{ marginRight: '10px', padding: '5px', border: '1px solid', borderRadius: '4px' }}
                            />
                            <p>Modifier la note</p>
                            <input
                                type="number"
                                value={product.rating}
                                onChange={(e) => handleRatingChange(e, index)}
                                placeholder="Nouvelle Note"
                                step="0.1"
                                max="5"
                                style={{ marginRight: '10px', padding: '5px', border: '1px solid', borderRadius: '4px' }}
                            />
                            <button
                                onClick={() => onDelete(index)}
                                style={{
                                    backgroundColor: '#dc3545',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px',
                                    borderRadius: '4px',
                                    marginTop: '10px',
                                    cursor: 'pointer'
                                }}
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <nav style={{ marginTop: '20px' }}>
                <button onClick={() => navigate('/add-product')} style={{ marginRight: '15px' }}>Ajouter un produit</button>
                <button onClick={() => navigate('/')} style={{ marginRight: '15px' }}>Accueil</button>
            </nav>
        </div>
    );
};

export default ProductList;
