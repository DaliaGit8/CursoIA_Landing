import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 text-lg rounded ${className}`}
      {...props}
    />
  );
};

export default Button;
