import { useState } from 'react';

function ProductOrder({ name, price }) {
  // Kiekio būsena, pradinė reikšmė – 1
  const [quantity, setQuantity] = useState(1);

  // Kiekio didinimas naudojant ankstesnę reikšmę (prev)
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  // Kiekio mažinimas: neleisti tapti mažesniam nei 1
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Papildomai: kiekio atkūrimas į 1
  const handleReset = () => {
    setQuantity(1);
  };

  // Bendra kaina apskaičiuojama pagal formulę price * quantity (atskiros būsenos nereikia)
  const totalPrice = price * quantity;

  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
    textAlign: 'left'
  };

  const buttonStyle = {
    padding: '6px 14px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#f5f5f5',
    color: '#333'
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    cursor: 'not-allowed',
    opacity: 0.5
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ marginTop: 0, color: '#222' }}>{name}</h3>
      <p style={{ margin: '6px 0', color: '#555' }}>
        <strong>Vieneto kaina:</strong> {price.toFixed(2)} Eur
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '14px 0' }}>
        {/* Mygtukas '-' neaktyvus, kai kiekis yra 1 */}
        <button
          style={quantity <= 1 ? disabledButtonStyle : buttonStyle}
          onClick={handleDecrease}
          disabled={quantity <= 1}
          title={quantity <= 1 ? 'Kiekis negali būti mažesnis nei 1' : 'Sumažinti'}
        >
          −
        </button>

        <span style={{ fontSize: '18px', fontWeight: 'bold', minWidth: '32px', textAlign: 'center' }}>
          {quantity}
        </span>

        <button
          style={buttonStyle}
          onClick={handleIncrease}
          title="Padidinti"
        >
          +
        </button>

        <button
          style={{ ...buttonStyle, marginLeft: '12px', fontSize: '13px' }}
          onClick={handleReset}
        >
          Atkurti kiekį
        </button>
      </div>

      <p style={{ margin: '10px 0 0', fontSize: '17px', color: '#2e7d32', fontWeight: 'bold' }}>
        Bendra kaina: {totalPrice.toFixed(2)} Eur
      </p>
    </div>
  );
}

export default ProductOrder;
