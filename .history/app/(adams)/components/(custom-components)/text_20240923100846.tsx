import React from 'react';

type TextProps = {
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
    w: "bold" | "light" | "semibold";
    children: React.ReactNode;
    [key: string]: any; // Allow any other props
}

const Text: React.FC<TextProps> = ({ size, w, children, ...props }) => {
    const fontSizes: Record<string, string> = {
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "30px",
        "5xl": "36px",
    };

    const fontSize = fontSizes[size] || fontSizes.sm; // Default to 'sm' if size is not found
    const fontWeight = w === "bold" ? "bold" : w === "semibold" ? "600" : "300";

    return (
        <span style={{ fontSize, fontWeight }} {...props}>
            {children}
        </span>
    );
}

export default Text;
