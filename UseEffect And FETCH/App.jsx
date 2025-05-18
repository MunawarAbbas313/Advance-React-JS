
import { useState, useEffect } from "react";

function App() {
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const JsonData = await response.json();
                setUserData(JsonData.results[0]);
            } catch (error) {
                setError(error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        };
        fetchData();
    }, []);

    const containerStyle = {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        fontFamily: "Segoe UI, Arial, sans-serif",
    };

    const cardStyle = {
        background: "#fff",
        padding: "2rem 3rem",
        borderRadius: "1rem",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        minWidth: "320px",
    };

    const imgStyle = {
        borderRadius: "50%",
        width: "120px",
        height: "120px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
        border: "4px solid #6366f1",
        objectFit: "cover",
    };

    const nameStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#3730a3",
        margin: 0,
    };

    if (isLoading) {
        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <h2 style={{ color: "#6366f1" }}>Loading .........</h2>
                </div>
            </div>
        );
    }
    if (error) {
        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <h2 style={{ color: "#ef4444" }}>Error : {error.message}</h2>
                </div>
            </div>
        );
    }
    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h2 style={{ color: "#6366f1", margin: 0 }}>HELLO FETCH</h2>
                <h2 style={nameStyle}>
                    Name : {userData.name.first} {userData.name.last}
                </h2>
                <img src={userData.picture.large} alt="User" style={imgStyle} />
            </div>
        </div>
    );
}

export default App;
