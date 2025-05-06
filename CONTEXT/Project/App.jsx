import { UserProvider, UseUser } from "./UserContext";

const LoginedUser = () => {
  const { user } = UseUser();
  return (
    <p style={{ 
      fontSize: '18px', 
      color: '#2c3e50',
      fontWeight: 'bold',
      margin: '0'
    }}>
      Hello : {user.name}
    </p>
  );
};

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#3498db',
      color: 'white',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold'
    }}>
      Blog App
      <LoginedUser />
    </header>
  );
};
