function ProfileDetails({ user }) {
  const detailsStyle = {
    border: '1px solid #4caf50',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f1f8e9',
    marginTop: '12px',
    color: '#2e7d32'
  };

  return (
    <div style={detailsStyle}>
      <h3 style={{ marginTop: 0 }}>{user.name}</h3>
      <p><strong>Amžius:</strong> {user.age} m.</p>
      <p><strong>El. paštas:</strong> {user.email}</p>
      <p><strong>Šalis:</strong> {user.country}</p>
    </div>
  );
}

export default ProfileDetails;
