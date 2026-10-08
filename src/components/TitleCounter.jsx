import { useState, useEffect } from 'react';

function TitleCounter() {
  // 1. Skaitliuko count reikšmė saugoma useState, pradinė reikšmė - 0
  const [count, setCount] = useState(0);

  // Komponento prijungimo (mount) ir atjungimo (unmount) konsolės pranešimai
  useEffect(() => {
    console.log('%c[TitleCounter] Komponentas prijungtas prie DOM (mount)', 'color: green; font-weight: bold;');
    return () => {
      console.log('%c[TitleCounter] Komponentas pašalintas iš DOM (unmount)', 'color: red; font-weight: bold;');
    };
  }, []);

  // 3. useEffect su priklausomybe [count] ir pavadinimo keitimu bei valymu
  useEffect(() => {
    console.log(`[TitleCounter] Efektas vykdomas: count = ${count}`);

    // Išsaugojamas ankstesnis pavadinimas prieš jį pakeičiant
    const previousTitle = document.title;
    document.title = `Skaitliukas: ${count}`;

    // Valymo (cleanup) funkcija: atkuria ankstesnį pavadinimą
    return () => {
      console.log(`[TitleCounter] Efekto valymas (cleanup): atkuriama antraštė -> "${previousTitle}"`);
      document.title = previousTitle;
    };
  }, [count]);

  // 2. Būsena didinama naudojant ankstesnę reikšmę (prev)
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        padding: '24px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        textAlign: 'center',
        maxWidth: '380px',
        margin: '20px auto'
      }}
    >
      <h2 style={{ margin: '0 0 16px', color: '#333' }}>
        Skaitliukas: <span style={{ color: '#007bff' }}>{count}</span>
      </h2>
      <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
        Kortelės pavadinimas: <code>{`Skaitliukas: ${count}`}</code>
      </p>

      {/* 2. Mygtukas „Didinti“ */}
      <button
        onClick={handleIncrement}
        style={{
          padding: '10px 24px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Didinti
      </button>
    </div>
  );
}

export default TitleCounter;
