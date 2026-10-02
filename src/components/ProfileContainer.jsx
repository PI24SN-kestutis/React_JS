import ProfileDetails from './ProfileDetails';

function ProfileContainer({ user }) {
  const containerStyle = {
    border: '1px dashed #2196f3',
    borderRadius: '8px',
    padding: '16px',
    marginTop: '12px',
    backgroundColor: '#e3f2fd',
    color: '#0d47a1'
  };

  return (
    <div style={containerStyle}>
      <h4 style={{ margin: 0 }}>ProfileContainer (tarpinis komponentas)</h4>
      {/* user objektas tiesiog persiunčiamas gilyn į ProfileDetails */}
      <ProfileDetails user={user} />
    </div>
  );
}

export default ProfileContainer;
