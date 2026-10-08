import ControlledLogin from './components/ControlledLogin';
import UncontrolledLogin from './components/UncontrolledLogin';

function App() {
  return (
    <div style={{ maxWidth: '950px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '0 16px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ marginBottom: '8px' , lineHeight: '1.2'}}>Formų palyginimas: Controlled vs Uncontrolled</h1>
        <p style={{ color: '#555', margin: 0 }}>
          Atidarykite naršyklės konsolę (<strong>F12 &rarr; Console</strong>) ir stebėkite atvaizdavimo (render) pranešimus rašydami tekstą.
        </p>
      </header>

      {/* Abu komponentai atvaizduojami greta palyginimui */}
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <ControlledLogin />
        <UncontrolledLogin />
      </div>

      {/* Palyginimo suvestinė */}
      <div
        style={{
          marginTop: '36px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef',
          lineHeight: '1.6'
        }}
      >
        <h3 style={{ marginTop: 0 }}>Palyginimo apibendrinimas:</h3>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>
            <strong>Rašant tekstą:</strong>
            <br />
            &bull; <em>Controlled:</em> su kiekviena raide kviečiamas <code>setState</code>, todėl komponentas persirenderina (konsolėje kartojasi <code>[ControlledLogin] Render</code>).
            <br />
            &bull; <em>Uncontrolled:</em> rašant tekstą komponentas <strong>nepersi-renderina</strong>, nes tekstą saugo pats DOM elementas (konsolė lieka rami).
          </li>
          <li style={{ marginTop: '8px' }}>
            <strong>Paspaudus „Rodyti / Slėpti slaptažodį“:</strong>
            <br />
            Abu komponentai persirenderina, nes keičiasi matomumo būsena (<code>showPassword</code>).
          </li>
          <li style={{ marginTop: '8px' }}>
            <strong>Pateikus formą (Submit):</strong>
            <br />
            Abu komponentai atlieka validaciją ir atvaizduoja klaidą arba sėkmės pranešimą.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
