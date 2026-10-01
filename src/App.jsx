// Komponentas, kuris priima 'children' prop.
// 'children' yra speciali React savybė, leidžianti atvaizduoti turinį,
// esantį tarp atidarymo ir uždarymo žymių: <Card>...turinys...</Card>
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
      {/* Čia atvaizduojamas visas perduotas vaikinis turinys */}
      <div>{children}</div>
    </div>
  );
}

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>React 'children' pavyzdys</h1>

      {/* Pavyzdys 1: Kortelė su pastraipa ir mygtuku */}
      <Card title="Pirmoji kortelė">
        <p>Šis tekstas ir mygtukas perduodami kaip <strong>children</strong> prop.</p>
        <button onClick={() => alert('Paspausta!')}>Paspausk mane</button>
      </Card>

      {/* Pavyzdys 2: Kortelė su sąrašu */}
      <Card title="Antroji kortelė (su sąrašu)">
        <ul>
          <li>Pirmas elementas</li>
          <li>Antras elementas</li>
          <li>Trečias elementas</li>
        </ul>
      </Card>
    </div>
  );
}

export default App;
