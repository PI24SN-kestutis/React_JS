function Card({ title, children }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '12px 0',
    backgroundColor: '#f9f9f9',
    color: '#333'
  };

  return (
    <div style={cardStyle}>
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </div>
  );
}

export default Card;
