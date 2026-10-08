import { useState, useRef, useEffect } from 'react';

function Timer() {
  // 1. Praėjusių sekundžių reikšmė saugoma useState, pradinė reikšmė - 0
  const [seconds, setSeconds] = useState(0);

  // Būsena mygtukų būklei indikuoti
  const [isRunning, setIsRunning] = useState(false);

  // 3. Intervalo identifikatorius saugomas useRef
  const intervalRef = useRef(null);

  // 2. „Start“ paleidžia setInterval (užtikrinant, kad veikia tik vienas intervalas)
  const handleStart = () => {
    if (intervalRef.current !== null) return; // Jei jau veikia, antro nepaleidžiame

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    console.log('[Timer] Intervalas paleistas');
  };

  // 3. „Stop“ sustabdo intervalą, išlaikydamas sukauptą sekundžių reikšmę
  const handleStop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
      console.log('[Timer] Intervalas sustabdytas');
    }
  };

  // 4. useEffect valymo funkcija: užtikrina clearInterval komponento pašalinimo metu
  useEffect(() => {
    console.log('[Timer] Komponentas prijungtas (mount)');

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      console.log('[Timer] Komponentas pašalintas (unmount), intervalas išvalytas');
    };
  }, []);

  return (
    <div
      style={{
        padding: '24px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        textAlign: 'center',
        maxWidth: '360px',
        margin: '0 auto'
      }}
    >
      <h2 style={{ margin: '0 0 10px', color: '#333' }}>Laikmatis (Timer)</h2>
      
      {/* 1. Praėjusių sekundžių atvaizdavimas ekrane */}
      <div
        style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: isRunning ? '#28a745' : '#6c757d',
          margin: '20px 0'
        }}
      >
        {seconds} <span style={{ fontSize: '20px' }}>sek.</span>
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        {/* 2. Mygtukas „Start“ */}
        <button
          onClick={handleStart}
          disabled={isRunning}
          style={{
            padding: '10px 24px',
            fontSize: '16px',
            backgroundColor: isRunning ? '#ccc' : '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: isRunning ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          Start
        </button>

        {/* 3. Mygtukas „Stop“ */}
        <button
          onClick={handleStop}
          disabled={!isRunning}
          style={{
            padding: '10px 24px',
            fontSize: '16px',
            backgroundColor: !isRunning ? '#ccc' : '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: !isRunning ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          Stop
        </button>
      </div>

      <p style={{ marginTop: '16px', fontSize: '13px', color: '#777' }}>
        Būsena: <strong>{isRunning ? '🟢 Skaičiuoja' : '🔴 Sustabdytas'}</strong>
      </p>
    </div>
  );
}

export default Timer;
