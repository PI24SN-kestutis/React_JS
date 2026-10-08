import { useEffect, useRef, useState } from 'react';

function App() {
  // 2. Sukurkite ref: useRef(null) ir priskirkite atributą ref
  const inputRef = useRef(null);

  // Būsena ekrane atvaizduoti paspausto Enter tekstą (kad matytųsi ne tik konsolėje)
  const [submittedValue, setSubmittedValue] = useState('');

  // useEffect: sufokusuokite lauką, kai komponentas atsiranda ekrane
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // 3. Mygtuko paspaudimo funkcija: inputRef.current.focus()
  const handleFocus = () => {
    inputRef.current.focus();
  };

  // onKeyDown: paspaudus Enter - console.log(turinys)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const text = inputRef.current.value;
      console.log('Įvesties lauko turinys:', text);
      setSubmittedValue(text);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>React <code>useRef</code> pavyzdys</h1>
      <p>Komponentas su įvesties lauku ir mygtuku</p>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        {/* 1. Įvesties laukas su ref ir onKeyDown apdorojimu */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Įveskite tekstą ir spauskite Enter..."
          onKeyDown={handleKeyDown}
          style={{ padding: '8px 12px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        {/* 1. Mygtukas ir 3. onClick: inputRef.current.focus() */}
        <button
          onClick={handleFocus}
          style={{
            padding: '8px 16px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Fokusuoti
        </button>
      </div>

      {/* Papildomas vizualus atvaizdavimas ekrane */}
      {submittedValue && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e9f7ef', borderRadius: '4px' }}>
          <strong>Paskutinis išsiųstas turinys:</strong> {submittedValue}
        </div>
      )}

      <p style={{ marginTop: '15px', color: '#666', fontSize: '14px' }}>
        <em>Pastaba: <code>console.log</code> pranešimas taip pat matomas naršyklės konsolėje (spauskite <strong>F12</strong> &rarr; <strong>Console</strong>).</em>
      </p>
    </div>
  );
}

export default App;
