import { useState } from 'react';
import TitleCounter from './components/TitleCounter';

function App() {
  // Sąlyginiam komponento prijungimui / pašalinimui (mount / unmount)
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '0 16px' }}>
      <h1>React <code>useEffect</code> &amp; Hooks užduotis</h1>
      <p style={{ color: '#555', marginBottom: '24px' }}>
        Naršyklės kortelės pavadinimo (<code>document.title</code>) sinchronizavimas ir efekto valymas (cleanup).
      </p>

      {/* Mygtukas komponento prijungimui / pašalinimui */}
      <button
        onClick={() => setShowCounter((prev) => !prev)}
        style={{
          padding: '10px 20px',
          fontSize: '15px',
          backgroundColor: showCounter ? '#dc3545' : '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}
      >
        {showCounter ? 'Pašalinti komponentą (Unmount)' : 'Prijungti komponentą (Mount)'}
      </button>

      {/* Sąlyginis TitleCounter atvaizdavimas */}
      {showCounter ? (
        <TitleCounter />
      ) : (
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px dashed #ccc', color: '#666' }}>
          Komponentas pašalintas iš DOM. Naršyklės kortelės pavadinimas atkurtas į pradinį!
        </div>
      )}

      {/* Instrukcija / pasitikrinimas */}
      <div style={{ marginTop: '30px', textAlign: 'left', backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', fontSize: '14px', lineHeight: '1.6' }}>
        <strong>Pasitikrinimas:</strong>
        <ol style={{ margin: '8px 0 0', paddingLeft: '20px' }}>
          <li>Atidarykite naršyklės konsolę (<strong>F12 &rarr; Console</strong>).</li>
          <li>Kortelės pavadinime matoma <code>Skaitliukas: 0</code>.</li>
          <li>Paspaudus 3 kartus „Didinti“ &rarr; kortelėje rodoma <code>Skaitliukas: 3</code>.</li>
          <li>Paspaudus raudoną mygtuką <em>„Pašalinti komponentą (Unmount)“</em> &rarr; suveikia <strong>cleanup</strong> funkcija ir kortelės pavadinimas grįžta į pradinį (<code>first_viko</code>).</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
