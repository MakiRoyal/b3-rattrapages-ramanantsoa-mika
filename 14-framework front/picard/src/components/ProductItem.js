const ProductItem = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Prix: {product.price} €</p>
            <p>Quantité: {product.quantity}</p>
            <p>Note: {product.rating}</p>
            <p>Disponible: {product.available ? 'Oui' : 'Non'}</p>
            <p>Date limite de consommation: {product.expiryDate}</p>
            <p>Date d'ajout: {product.addedDate}</p>
            <img src={product.image} alt={product.name} style={{ width: '100px' }} />
        </div>
    );
};

export default ProductItem;
