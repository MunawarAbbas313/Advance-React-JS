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

