function UserProfile({ user, onRoleChange }) {
  const profileStyle = {
    backgroundColor: '#fff',
    border: '2px solid #4CAF50',
    borderRadius: '8px',
    padding: '16px',
    marginTop: '10px',
    color: '#333'
  };

  return (
    <div style={profileStyle}>
      <h4>4 Lygis: UserProfile komponentas</h4>
      <p>Šis komponentas <strong>naudoja</strong> gautus duomenis:</p>
      <p><strong>Vardas:</strong> {user.name}</p>
      <p><strong>El. paštas:</strong> {user.email}</p>
      <p><strong>Rolė:</strong> {user.role}</p>

      <button
        style={{ padding: '8px 12px', cursor: 'pointer' }}
        onClick={onRoleChange}
      >
        Keisti rolę
      </button>
    </div>
  );
}

export default UserProfile;
