import { useState } from "react";
import usePrevious from "./usePrevious";

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

export default function App() {
    const [index, setIndex] = useState(0);
    const day = days[index];
    const prevDay = usePrevious(day);

    function handleClick() {
        setIndex((i) => (i + 1) % days.length);
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Segoe UI, sans-serif"
            }}
        >
            <div
                style={{
                    background: "#fff",
                    padding: "2.5rem 3rem",
                    borderRadius: "1.5rem",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                    textAlign: "center",
                    minWidth: "320px"
                }}
            >
                <h1 style={{ color: "#6366f1", marginBottom: "1.5rem", fontSize: "2.5rem" }}>
                    Today is: <span style={{ fontWeight: 700 }}>{day}</span>
                </h1>
                {prevDay && (
                    <h2 style={{ color: "#64748b", marginBottom: "2rem", fontSize: "1.3rem" }}>
                        Previous work day was: <span style={{ fontWeight: 500 }}>{prevDay}</span>
                    </h2>
                )}
                <button
                    onClick={handleClick}
                    style={{
                        background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "999px",
                        padding: "0.9rem 2.2rem",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(99, 102, 241, 0.15)",
                        transition: "background 0.2s"
                    }}
                >
                    Get next day
                </button>
            </div>
        </div>
    );
}
