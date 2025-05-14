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

