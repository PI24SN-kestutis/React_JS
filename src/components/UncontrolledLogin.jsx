import { useRef, useState } from 'react';

function UncontrolledLogin() {
  console.log('[UncontrolledLogin] Render');

  // useRef nuorodos DOM elementams pasiekti (reikšmės nesaugomos React būsenoje)
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Būsenos tik klaidai, sėkmei ir slaptažodžio matomumui
  const [error, setError] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    // Sustabdomas numatytasis naršyklės pateikimas
    e.preventDefault();

    // Reikšmės perskaitomos tiesiai iš DOM elementų tik pateikiant formą
    const enteredEmail = emailRef.current ? emailRef.current.value.trim() : '';
    const enteredPassword = passwordRef.current ? passwordRef.current.value.trim() : '';

    // Patikrinimas: tušti arba tik iš tarpų sudaryti laukai
    if (!enteredEmail || !enteredPassword) {
      setError('Visi laukai yra privalomi!');
      return;
    }

    // Sėkmė: išvaloma klaida ir išsaugomas el. paštas pasveikinimui
    setError('');
    setSubmittedEmail(enteredEmail);
  };

  const handleLogout = () => {
    setSubmittedEmail('');
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
      <h3 style={{ marginTop: 0, color: '#28a745', textAlign: 'center' }}>
        2. Nekontroliuojama forma (Uncontrolled)
      </h3>
      <p style={{ fontSize: '13px', color: '#666', textAlign: 'center' }}>
        Reikšmes saugo naršyklės DOM; skaitoma per <code>useRef</code> tik siunčiant.
      </p>

      {/* Sėkmės atveju paslepiama forma ir rodomas pasveikinimas */}
      {submittedEmail ? (
        <div style={{ padding: '20px', backgroundColor: '#e9f7ef', borderRadius: '6px', textAlign: 'center' }}>
          <h3 style={{ color: '#27ae60', margin: '0 0 10px' }}>Sveiki, {submittedEmail}!</h3>
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
          {/* Sąlyginis klaidos pranešimas */}
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

          {/* El. pašto laukas: defaultValue vietoj value, be onChange */}
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>
              El. paštas:
            </label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              defaultValue=""
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

          {/* Slaptažodžio laukas: defaultValue vietoj value, type perjungimas */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>
              Slaptažodis:
            </label>
            <div style={{ display: 'flex', gap: '6px' }}>
              <input
                ref={passwordRef}
                name="password"
                type={showPassword ? 'text' : 'password'}
                defaultValue=""
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
              {/* Slaptažodžio rodymo/slėpimo mygtukas */}
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

          {/* Formos pateikimo mygtukas */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#28a745',
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

export default UncontrolledLogin;
