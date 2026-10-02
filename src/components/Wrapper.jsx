import ProfileContainer from './ProfileContainer';

function Wrapper({ user }) {
  const wrapperStyle = {
    border: '1px dotted #ff9800',
    borderRadius: '8px',
    padding: '16px',
    marginTop: '12px',
    backgroundColor: '#fff3e0',
    color: '#e65100'
  };

  return (
    <div style={wrapperStyle}>
      <h3 style={{ margin: 0 }}>Wrapper (tarpinis komponentas)</h3>
      {/* user objektas tiesiog persiunčiamas gilyn į ProfileContainer */}
      <ProfileContainer user={user} />
    </div>
  );
}

export default Wrapper;
