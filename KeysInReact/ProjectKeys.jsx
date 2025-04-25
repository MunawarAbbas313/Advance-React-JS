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

/* Todo Component */

function Todo(props) {
    return (
        <>
            <tr style={{ backgroundColor: "#f9f9f9", borderBottom: "1px solid #ddd", textAlign: "left"  }}>
                <td style={{ padding: "10px", fontWeight: "bold" }}>
                    
                    <label>{props.id}</label>
                    </td>
                <td style={{ padding: "10px" }}>
                    <input style={{ padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }} />
                </td>
                <td style={{ padding: "10px", color: "#555" }}>
                    <label>{props.CreatedAt}</label>
                </td>
            </tr>
        </>
    );
}
export default Todo;
