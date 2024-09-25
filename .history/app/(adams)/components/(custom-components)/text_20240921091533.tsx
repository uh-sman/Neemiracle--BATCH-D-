import React from 'react';

type TextProps = {
    size: "sm";
    w: "bold" | "light" | "semibold";
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ size, w, children }) => {
  const fontSize = size === "sm" ? "12px" : "16px"; // Add more sizes as needed
  const fontWeight = w === "bold" ? "bold" : w === "semibold" ? "600" : "300";

  return (
    <span style={{ fontSize, fontWeight }}>
      {
        children
      }
    </span>
  );
}

export default Text;
