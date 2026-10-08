import { useState } from 'react';

function ControlledLogin() {
  console.log('[ControlledLogin] Render');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Visi laukai yra privalomi!');
      return;
    }

    setError('');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setError('');
    setShowPassword(false);
  };

  return (
    <div
      style={{
        flex: 1,
        minWidth: '300px',
        maxWidth: '420px',
        padding: '24px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}
    >
      <h3 style={{ marginTop: 0, color: '#007bff', textAlign: 'center' }}>
        1. Kontroliuojama forma (Controlled)
      </h3>
      <p style={{ fontSize: '13px', color: '#666', textAlign: 'center' }}>
        Reikšmės saugomos React <code>useState</code> būsenoje.
      </p>

      {isLoggedIn ? (
        <div style={{ padding: '20px', backgroundColor: '#e9f7ef', borderRadius: '6px', textAlign: 'center' }}>
          <h3 style={{ color: '#27ae60', margin: '0 0 10px' }}>Sveiki, {email}!</h3>
          <p style={{ margin: '0 0 15px', color: '#555', fontSize: '14px' }}>Sėkmingai prisijungėte.</p>
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
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
        <form onSubmit={handleSubmit}>
          {error && (
            <div
              style={{
                padding: '8px 12px',
                marginBottom: '14px',
                backgroundColor: '#fde8e8',
                color: '#c81e1e',
                borderRadius: '4px',
                fontSize: '13px'
              }}
            >
              {error}
            </div>
          )}

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>
              El. paštas:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vardas@pavyzdys.lt"
              style={{
                width: '100%',
                padding: '8px 10px',
                boxSizing: 'border-box',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '14px'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>
              Slaptažodis:
            </label>
            <div style={{ display: 'flex', gap: '6px' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  flex: 1,
                  padding: '8px 10px',
                  boxSizing: 'border-box',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '14px'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
              >
                {showPassword ? 'Slėpti' : 'Rodyti'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '15px',
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

export default ControlledLogin;
