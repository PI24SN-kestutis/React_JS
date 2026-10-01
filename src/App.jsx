import { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState({
    name: 'Jonas Jonaitis',
    email: 'jonas@viko.lt',
    role: 'Studentas'
  });

  const toggleRole = () => {
    setUser((prev) => ({
      ...prev,
      role: prev.role === 'Studentas' ? 'Dėstytojas' : 'Studentas'
    }));
  };

  return (
    <div style={{ maxWidth: '700px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>1 Lygis: App komponentas (Duomenų šaltinis)</h1>
      <p>Čia saugoma <code>user</code> būsena ir <code>toggleRole</code> funkcija.</p>

      {/* Pradedamas 'prop drilling' procesas per komponentus iš 'components' aplanko */}
      <Dashboard user={user} onRoleChange={toggleRole} />
    </div>
  );
}

export default App;
