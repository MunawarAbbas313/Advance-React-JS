App.jsx
import { useState } from "react";
import Todo from "./Todo";

function App(){
  const [todo , setToto] = useState([
    {
      id: "todo 1",
      CreatedAt: "25-April-2025"
    },
    {
      id: "todo 2",
      CreatedAt: "26-April-2025"
    }
  ]);

  const revereTodo = ()=>{
    setToto([...todo].reverse());
  }
      return(
        <>
        <button
          onClick={revereTodo}
          style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginBottom: "10px"
          }}
        >Reverse</button>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <tbody>
        {todo.map((todo, index) => (
          <Todo 
        id={todo.id} 
        CreatedAt={todo.CreatedAt} 
      key={index}
        style={{
          border: "1px solid black",
          padding: "8px",
          textAlign: "left"
        }}
          />
        ))}
     
          </tbody>
        </table>
        </>
      )

}
export default App;
