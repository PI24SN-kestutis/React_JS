import { useState } from 'react';

function App() {
  // 1. Kontroliuojami laukai (email ir password)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 3. Klaidos pranešimo būsena
  const [error, setError] = useState('');

  // 4. Sėkmingo prisijungimo būsena
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 5. Slaptažodžio rodymo / slėpimo būsena
  const [showPassword, setShowPassword] = useState(false);

  // 2. onSubmit apdorojimas su event.preventDefault()
  const handleSubmit = (e) => {
    e.preventDefault();

    // 3. Tuščias laukas → klaidos pranešimas
    if (!email.trim() || !password.trim()) {
      setError('Visi laukai yra privalomi!');
      return;
    }

    // Sėkmė: išvaloma klaida ir pažymima, kad prisijungta
    setError('');
    setIsLoggedIn(true);
  };

  // Atsijungimo funkcija patogiam testavimui
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setError('');
    setShowPassword(false);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      {/* 4. Sąlyginis atvaizdavimas: sėkmės atveju rodomas pasveikinimas, forma paslėpta */}
      {isLoggedIn ? (
        <div style={{ padding: '24px', backgroundColor: '#e9f7ef', borderRadius: '8px', textAlign: 'center' }}>
          <h2 style={{ color: '#27ae60', margin: '0 0 16px' }}>Sveiki, {email}!</h2>
          <p style={{ color: '#555', marginBottom: '20px' }}>Sėkmingai prisijungėte prie sistemos.</p>
          <button
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Atsijungti
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            padding: '24px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Prisijungimas</h2>

          {/* 3. Sąlyginis klaidos pranešimas */}
          {error && (
            <div
              style={{
                padding: '10px',
                marginBottom: '16px',
                backgroundColor: '#fde8e8',
                color: '#c81e1e',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              {error}
            </div>
          )}

          {/* 1. Kontroliuojamas email laukas */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>El. paštas:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vardas@pavyzdys.lt"
              style={{
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '14px'
              }}
            />
          </div>

          {/* 1. Kontroliuojamas password laukas ir 5. type perjungimas */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Slaptažodis:</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  flex: 1,
                  padding: '10px',
                  boxSizing: 'border-box',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '14px'
                }}
              />
              {/* 5. Mygtukas „Rodyti slaptažodį“ keičia type: password <-> text */}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                style={{
                  padding: '10px 12px',
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  whiteSpace: 'nowrap'
                }}
              >
                {showPassword ? 'Slėpti' : 'Rodyti'}
              </button>
            </div>
          </div>

          {/* Formos pateikimo mygtukas */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Prisijungti
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
