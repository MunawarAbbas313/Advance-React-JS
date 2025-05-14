
import { useState } from "react";

export default function App() {
    const [giftCard, setGiftCard] = useState({
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    });

    function spendGiftCard() {
        setGiftCard({
            ...giftCard,
            text: "Your coupon has been used",
            valid: false,
            instructions: "Please visit our restaurant to renew your gift card.",
        });
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "#fff",
                    borderRadius: "20px",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                    padding: "40px 32px",
                    maxWidth: "400px",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <h1 style={{ color: "#4f46e5", marginBottom: "16px" }}>Gift Card</h1>
                <h2 style={{ color: "#334155", marginBottom: "8px", fontWeight: 500 }}>
                    {giftCard.firstName} {giftCard.lastName}
                </h2>
                <h3
                    style={{
                        color: giftCard.valid ? "#16a34a" : "#f59e42",
                        marginBottom: "16px",
                        fontWeight: 600,
                    }}
                >
                    {giftCard.text}
                </h3>
                <p style={{ color: "#64748b", marginBottom: "24px" }}>
                    {giftCard.instructions}
                </p>
                {giftCard.valid && (
                    <button
                        onClick={spendGiftCard}
                        style={{
                            background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            padding: "12px 28px",
                            fontSize: "1rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(99, 102, 241, 0.15)",
                            transition: "background 0.2s",
                        }}
                    >
                        Spend Gift Card
                    </button>
                )}
            </div>
        </div>
    );
}
