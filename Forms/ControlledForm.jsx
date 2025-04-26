
import { useState } from "react";

function App(){
  const [Score , SetScore] = useState(10);
  const [Comment , SetCommant] = useState("");
  const HandleSubmit = (e)=>{
    e.preventDefault();
    if(Number(Score) < 5 || Comment.length <=10)
      {alert("Kindly Enter a Valid Value ")
         return;
      }
      else{
        alert("Bro Submitted the From ")
      }

  }
  return (
    <>
      <div
        className="fromBox"
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f9f9f9",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          FeedBack Form
        </h2>
        <form onSubmit={HandleSubmit}>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
              color: "#555",
            }}
          >
            Score:{Score} ⭐
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={Score}
            onChange={(e)=> SetScore(e.target.value)}
            style={{
              width: "100%",
              marginBottom: "15px",
            }}
          />
          <textarea
          value={Comment}
          onChange={(e)=> SetCommant(e.target.value)}
            style={{
              width: "100%",
              height: "80px",
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              resize: "none",
            }}
          />
          <button
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default App;
