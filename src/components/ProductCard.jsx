function ProductCard({ title, price, description }) {
  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ marginTop: 0, color: '#333' }}>{title}</h3>
      <p style={{ color: '#2e7d32', fontWeight: 'bold' }}>
        Kaina: {price} €
      </p>
      <p style={{ color: '#666' }}>{description}</p>
    </div>
  );
}

export default ProductCard;
