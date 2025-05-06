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
const Para = () => {
  const { user } = UseUser();
  return (
    <div style={{ padding: '0 20px' }}>
      <h2 style={{
        color: '#2c3e50',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        Hello this is my First Blog
      </h2>
      <p style={{
        lineHeight: '1.6',
        color: '#34495e',
        fontSize: '16px',
        textAlign: 'justify',
        marginBottom: '20px'
      }}>
        Today we are going to understand the CONTEXT API in depth, its use case with a coding example.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet minima reiciendis molestiae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nam odit veritatis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic mollitia modi maiores molestiae nemo.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta porro non officiis culpa exercitationem?
      </p>
      <h2 style={{
        color: '#2c3e50',
        fontSize: '18px',
        borderTop: '1px solid #bdc3c7',
        paddingTop: '15px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        Written with 💗 by : {user.name} : {user.email}
      </h2>
    </div>
  );
};

function App() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh'
    }}>
      <Header />
      <Para />
    </div>
  );
}
export default App;

