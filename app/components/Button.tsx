import React from "react";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-500 transition-all duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default Button;
