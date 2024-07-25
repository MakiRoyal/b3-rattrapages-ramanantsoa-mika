const Filter = ({ categories, onFilter }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <label htmlFor="categoryFilter" style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Filtrer par catégorie</label>
            <select
                id="categoryFilter"
                onChange={(e) => onFilter(e.target.value)}
                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            >
                <option value="">Toutes les catégories</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
