
import { useEffect, useState } from "react";

// HOC to provide mouse position
const withMousePosition = (WrappedComponent) => {
    return (props) => {
        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

        useEffect(() => {
            const handleMousePosition = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            };
            window.addEventListener("mousemove", handleMousePosition);
            return () => {
                window.removeEventListener("mousemove", handleMousePosition);
            };
        }, []);

        return <WrappedComponent {...props} mousePosition={mousePosition} />;
    };
};

// Pretty Panel Mouse Logger
const PannelMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) return null;
    return (
    <div className="panel-mouse-logger">
        <p className="panel-title">Mouse Position</p>
        <div className="row">
            <span className="coord-x">x: {mousePosition.x}</span>
            <span className="coord-y">y: {mousePosition.y}</span>
        </div>
    </div>
    );
};

// Pretty Point Mouse Logger
const PointMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) return null;
    return (
        <p className="point-mouse-logger">
            {mousePosition.x}, {mousePosition.y}
        </p>
    );
};

const PannelMouseLTracker = withMousePosition(PannelMouseLogger);
const PontMouseTracter = withMousePosition(PointMouseLogger);

function App() {
    return (
        <>
            <style>{`
                body {
                    background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
                    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
                }
                .app {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 40px 0;
                    background: linear-gradient(120deg, #f0f4ff 0%, #f8fafc 100%);
                }
                .header {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #4f46e5;
                    margin-bottom: 40px;
                    letter-spacing: 1px;
                    text-shadow: 0 2px 8px #e0e7ff;
                }
                .panel-mouse-logger {
                    background: #fff;
                    border-radius: 18px;
                    box-shadow: 0 4px 24px 0 rgba(79,70,229,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.04);
                    padding: 32px 48px;
                    margin-bottom: 32px;
                    min-width: 320px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: box-shadow 0.2s;
                }
                .panel-mouse-logger:hover {
                    box-shadow: 0 8px 32px 0 rgba(79,70,229,0.18), 0 3px 12px 0 rgba(0,0,0,0.08);
                }
                .panel-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #6366f1;
                    margin-bottom: 18px;
                    letter-spacing: 0.5px;
                }
                .row {
                    display: flex;
                    gap: 32px;
                    font-size: 1.25rem;
                }
                .coord-x, .coord-y {
                    background: #eef2ff;
                    color: #3730a3;
                    padding: 8px 18px;
                    border-radius: 8px;
                    font-weight: 500;
                    box-shadow: 0 1px 4px 0 rgba(99,102,241,0.08);
                }
                .point-mouse-logger {
                    font-size: 1.5rem;
                    color: #6366f1;
                    background: #e0e7ff;
                    padding: 12px 32px;
                    border-radius: 12px;
                    box-shadow: 0 2px 8px 0 rgba(99,102,241,0.10);
                    margin-bottom: 16px;
                    font-weight: 500;
                    letter-spacing: 1px;
                }
            `}</style>
            <div className="app">
                <header className="header">Use of HOC "High Order Component"</header>
                <PannelMouseLTracker />
                <PontMouseTracter />
            </div>
        </>
    );
}

export default App;
