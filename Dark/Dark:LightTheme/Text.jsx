import React from "react";
import { useTheme } from "./Conetxt";

function Text() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const containerStyle = {
    minHeight: "100vh",
    background: isDark
      ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
      : "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', sans-serif",
    color: isDark ? "#f8fafc" : "#334155",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{
        color: isDark ? "#a5b4fc" : "#4f46e5",
        fontSize: "3rem",
        fontWeight: "bold",
        letterSpacing: "2px",
        marginBottom: "1rem",
        textShadow: isDark ? "2px 2px 8px #1e40af" : "2px 2px 8px #c7d2fe"
      }}>
        Welcome to the Text Page!
      </h1>
      <p style={{
        fontSize: "1.25rem",
        maxWidth: "500px",
        textAlign: "center",
        marginBottom: "2rem"
      }}>
        This is a beautifully styled page with some pretty things. Enjoy the gradients, soft shadows, and playful colors!
      </p>
      {/* Button and emojis remain the same or you can theme them too */}
    </div>
  );
}

export default Text;
