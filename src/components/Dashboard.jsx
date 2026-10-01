import Navbar from './Navbar';

function Dashboard({ user, onRoleChange }) {
  const dashboardStyle = {
    backgroundColor: '#ede7f6',
    border: '1px solid #b39ddb',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px 0',
    color: '#4a148c'
  };

  return (
    <div style={dashboardStyle}>
      <h2>2 Lygis: Dashboard komponentas</h2>
      <p><em>(Esu tarpinis komponentas: pats nenaudoju šių props, tik persiunčiu į Navbar)</em></p>

      {/* Duomenys persiunčiami į 3 lygį */}
      <Navbar user={user} onRoleChange={onRoleChange} />
    </div>
  );
}

export default Dashboard;
