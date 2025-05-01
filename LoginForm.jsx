
import { useState } from "react";


const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("SELECT");

  const getIsFormValid = () => {
   
        return true;
      
  };

  const clearForm = () => {
    setEmail("");
    setLastName("");
    setPassword("");
    setRole("SELECT")
    setFirstName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
      alert("Invlaid Detailes Kindly check them ")
    
    console.log("I am being clicked");
    
  };

  return (
    <div className="App" style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <fieldset style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</h2>
        <div className="Field" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label>
          First name <sup style={{ color: "red" }}>*</sup>
        </label>
        <input placeholder="First name" 
        onChange={(e)=> setFirstName(e.target.value)}
        value={firstName}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        </div>
        <div className="Field" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label>Last name</label>
        <input placeholder="Last name" 
        onChange={(e)=> setLastName(e.target.value)}
        value={lastName}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        </div>
        <div className="Field" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label>
          Email address <sup style={{ color: "red" }}>*</sup>
        </label>
        <input placeholder="Email address" 
        onChange={(e)=> setEmail(e.target.value)}
        value={email}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        </div>
        <div className="Field" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label>
          Password <sup 
          style={{ color: "red" }}>*</sup>
        </label>
       < input 
  type="password" 
  placeholder="Password" 
  onChange={(e) => setPassword( e.target.value )}
  onBlur={() => setPassword({ isTouched: true })}
  value={password}
  style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
/>
{/* Show error message if password is touched and less than 8 characters */}
{password.isTouched && password.value.length < 8 && <PasswordErrorMessage />}

       
        </div>
        <div className="Field" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label>
          Role <sup style={{ color: "red" }}>*</sup>
        </label>
        <select
         onChange={(e)=> setRole(e.target.value)}
         value={role}
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}>
          <option value="SELECT">Role</option>
          <option value="individual">Individual</option>
          <option value="business">Business</option>
        </select>
        </div>
        <button
        type="submit"
        disabled={!getIsFormValid()}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        >
        Create account
        </button>
      </fieldset>
      </form>
    </div>
    );
}

export default App;

