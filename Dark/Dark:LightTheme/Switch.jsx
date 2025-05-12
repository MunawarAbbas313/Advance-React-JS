import React from "react";
import { useTheme } from "./Conetxt";
import "./Style.css";

function Switch() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme ==="dark"

    return (
        <>
            <div className="switch-container">
                <div className="switch-header">
                    <h3 style={{
        color: isDark ? "#a5b4fc" : "#4f46e5",
        fontSize: "3rem",
        fontWeight: "bold",
        letterSpacing: "2px",
        marginBottom: "1rem",
        textShadow: isDark ? "2px 2px 8px #1e40af" : "2px 2px 8px #c7d2fe"
      }}>Theme Switcher </h3>
                </div>
                <div className="switch-toggle">
                    <label className="custom-checkbox">
                        <input
                            type="checkbox"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                            className="switch-input"
                        />
                        <span className="switch-slider"></span>
                    </label>
                </div>
               
            </div>
        </>
    );
}

export default Switch;
