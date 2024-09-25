import React from 'react';

type TextProps = {
    size: "sm";
    w: "bold" | "light" | "semibold";
    children: React.ReactNode;
    // Use Record<string, any> to allow any other props
    [key: string]: any; 
}

const Text: React.FC<TextProps> = ({ size, w, children, ...props }) => {
    const fontSize = size === "sm" ? "12px" : "16px"; // Add more sizes as needed
    const fontWeight = w === "bold" ? "bold" : w === "semibold" ? "600" : "300";

    return (
        <span style={{ fontSize, fontWeight }} {...props}>
            {children}
        </span>
    );
}

export default Text;
