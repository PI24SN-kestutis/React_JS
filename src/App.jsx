import { useState } from 'react';
import Timer from './components/Timer';

function App() {
  // 5. Sąlyginiam Timer atvaizdavimui (pašalinimui iš komponentų medžio)
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '0 16px' }}>
      <h1>React <code>useEffect</code> &amp; <code>useRef</code> Laikmatis</h1>
      <p style={{ color: '#555', marginBottom: '24px' }}>
        Intervalo valdymas naudojant <code>useRef</code> ir valymas (cleanup) komponento atjungimo metu.
      </p>

      {/* 5. Mygtukas, kuris rodo arba pašalina Timer iš komponentų medžio */}
      <button
        onClick={() => setShowTimer((prev) => !prev)}
        style={{
          padding: '10px 20px',
          fontSize: '15px',
          backgroundColor: showTimer ? '#6c757d' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: '24px'
        }}
      >
        {showTimer ? 'Pašalinti Timer iš ekrano' : 'Rodyti Timer ekrane'}
      </button>

      {/* 5. Sąlyginis atvaizdavimas: jei showTimer === false, komponentas visiškai pašalinamas */}
      {showTimer ? (
        <Timer />
      ) : (
        <div style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px dashed #ccc', color: '#666' }}>
          Laikmačio komponentas pašalintas iš komponentų medžio.
          <br />
          Intervalas buvo saugiai išvalytas per <code>useEffect</code> cleanup funkciją.
        </div>
      )}

      {/* Pasitikrinimo gairės */}
      <div style={{ marginTop: '30px', textAlign: 'left', backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', fontSize: '14px', lineHeight: '1.6' }}>
        <strong>Pasitikrinimas:</strong>
        <ol style={{ margin: '8px 0 0', paddingLeft: '20px' }}>
          <li>Paspauskite <strong>Start</strong> &rarr; sekundės pradeda didėti kas 1000 ms.</li>
          <li>Paspauskite <strong>Stop</strong> &rarr; skaičiavimas sustoja, sukaupta reikšmė išlieka.</li>
          <li>Vėl paspauskite <strong>Start</strong> &rarr; skaičiavimas tęsiamas nuo tos pačios vietos.</li>
          <li>Veikiant laikmačiui paspauskite <em>„Pašalinti Timer iš ekrano“</em> &rarr; komponentas sunaikinamas, o konsolėje (<strong>F12</strong>) matoma, kad intervalas išvalytas.</li>
          <li>Vėl paspaudus <em>„Rodyti Timer ekrane“</em> &rarr; sukuriamas visiškai naujas komponentas su pradine reikšme <code>0 sek.</code>.</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
