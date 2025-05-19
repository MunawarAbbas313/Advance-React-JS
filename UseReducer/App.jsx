import { useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
    if (action.type === "buy-Ing") return { money: state.money - 10 };
    if (action.type === "sell-Ing") return { money: state.money + 10 };
    return state;
};

function App() {
    const initialState = { money: 100 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Segoe UI, sans-serif"
        }}>
            <div style={{
                background: "#fff",
                padding: "2.5rem 3rem",
                borderRadius: "1.5rem",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                textAlign: "center",
                minWidth: "320px"
            }}>
                <h1 style={{
                    color: "#6366f1",
                    marginBottom: "1.5rem",
                    letterSpacing: "1px"
                }}>
                    Bookstore Balance
                </h1>
                <div style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#0f172a",
                    marginBottom: "2rem"
                }}>
                    ${state.money}
                </div>
                <div>
                    <button
                        onClick={() => dispatch({ type: "buy-Ing" })}
                        style={{
                            background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "0.75rem",
                            padding: "0.75rem 2rem",
                            fontSize: "1.1rem",
                            fontWeight: "500",
                            marginRight: "1rem",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(99, 102, 241, 0.15)",
                            transition: "transform 0.1s"
                        }}
                    >
                        Buy Ingredients
                    </button>
                    <button
                        onClick={() => dispatch({ type: "sell-Ing" })}
                        style={{
                            background: "linear-gradient(90deg, #34d399 0%, #6ee7b7 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "0.75rem",
                            padding: "0.75rem 2rem",
                            fontSize: "1.1rem",
                            fontWeight: "500",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(52, 211, 153, 0.15)",
                            transition: "transform 0.1s"
                        }}
                    >
                        Sell Ingredients
                    </button>
                </div>
            </div>
            <footer style={{
                marginTop: "2.5rem",
                color: "#64748b",
                fontSize: "1rem"
            }}>
                Powered by <span style={{ color: "#6366f1", fontWeight: "bold" }}>Munawar Abbas using useReducer</span>
            </footer>
        </div>
    );
}

export default App;
