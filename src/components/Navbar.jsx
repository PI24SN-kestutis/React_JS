import UserProfile from './UserProfile';

function Navbar({ user, onRoleChange }) {
  const navStyle = {
    backgroundColor: '#e3f2fd',
    border: '1px solid #90caf9',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px 0',
    color: '#0d47a1'
  };

  return (
    <div style={navStyle}>
      <h3>3 Lygis: Navbar komponentas</h3>
      <p><em>(Esu tarpinis komponentas: pats nenaudoju šių props, tik persiunčiu į UserProfile)</em></p>

      {/* Duomenys persiunčiami į 4 lygį */}
      <UserProfile user={user} onRoleChange={onRoleChange} />
    </div>
  );
}

export default Navbar;
