import { useState } from "react";

function App() {
    const [greeting, setGreeting] = useState({ greetMsg: "HELLO WORLD" });
    const [theme, setTheme] = useState("light");
    const [fontSize, setFontSize] = useState(28);

    const UpdateGreet = () => {
        setGreeting({
            greetMsg:
                greeting.greetMsg === "HELLO WORLD" ? "Good Bye World" : "HELLO WORLD",
        });
    };

const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const increaseFont = () => setFontSize((f) => Math.min(f + 2, 48));
    const decreaseFont = () => setFontSize((f) => Math.max(f - 2, 16));

    const pageStyle = {
        minHeight: "100vh",
        background: theme === "light"
            ? "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)"
            : "linear-gradient(135deg, #232526 0%, #414345 100%)",
        color: theme === "light" ? "#22223b" : "#f8fafc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', 'Roboto', sans-serif",
        transition: "all 0.4s",
    };

    const cardStyle = {
        background: theme === "light" ? "#fff" : "#2d3142",
        borderRadius: "18px",
        boxShadow: "0 8px 32px rgba(60,60,60,0.12)",
        padding: "2.5rem 3rem",
        textAlign: "center",
        marginBottom: "2rem",
        transition: "all 0.4s",
    };

    const buttonStyle = {
        margin: "0.5rem",
        padding: "0.7rem 1.5rem",
        border: "none",
        borderRadius: "8px",
        background: "#6c63ff",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1rem",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(108,99,255,0.12)",
        transition: "background 0.2s",
    };

    const themeBtnStyle = {
        ...buttonStyle,
        background: theme === "light" ? "#232526" : "#e0e7ff",
        color: theme === "light" ? "#fff" : "#232526",
    };

    const fontBtnStyle = {
        ...buttonStyle,
        background: "#ffb703",
        color: "#232526",
    };

    return (
        <div style={pageStyle}>
            <div style={cardStyle}>
                <h1 style={{ fontSize: fontSize, marginBottom: "1.5rem" }}>
                    {greeting.greetMsg}
                </h1>
                <button style={buttonStyle} onClick={UpdateGreet}>
                    Update Msg
                </button>
                <button style={themeBtnStyle} onClick={toggleTheme}>
                    Switch to {theme === "light" ? "Dark" : "Light"} Theme
                </button>
                <div style={{ marginTop: "1.5rem" }}>
                    <button style={fontBtnStyle} onClick={increaseFont}>
                        A+
                    </button>
                    <button style={fontBtnStyle} onClick={decreaseFont}>
                        A-
                    </button>
                </div>
            </div>
            <footer style={{ opacity: 0.7, fontSize: "1rem" }}>
                <span role="img" aria-label="books">📚</span> Bookstore UI Demo
            </footer>
        </div>
    );
}

export default App;
