function CalculationResult({ result }) {
  // Kai skaičiavimas dar neatliktas (result === null), nieko nerodome
  if (result === null) {
    return null;
  }

  const resultStyle = {
    marginTop: '16px',
    padding: '12px 16px',
    backgroundColor: '#e8f5e9',
    border: '1px solid #81c784',
    borderRadius: '8px',
    color: '#2e7d32',
    fontSize: '18px',
    fontWeight: 'bold'
  };

  return (
    <div style={resultStyle}>
      Rezultatas: {result}
    </div>
  );
}

export default CalculationResult;
