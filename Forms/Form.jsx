import { useState } from "react";

function App(){
  const [Name , Setname] = useState("");

  const hanldeSubumt =(e)=>{
     e.preventDefault();

     console.log(`Submit Handled with name : ${Name}` );
     

  }
  return (
    <>
      <div
        className="fromDiv"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f0f8ff",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <label
            htmlFor="name"
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Your name"
            value={Name}
            id="Name"
            onChange={(e)=> Setname(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
          onClick={hanldeSubumt}
          disabled = {!Name}
            style={{
              padding: "10px",
              fontSize: "14px",
              color: "#fff",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <h1>Your nanme is ${Name}</h1>
      </div>
    </>
  );
}
export default App;
