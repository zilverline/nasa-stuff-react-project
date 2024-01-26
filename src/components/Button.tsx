import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}
const Button = ({ title, onClick }: ButtonProps) => (
  <div className="buttoncontainer">
    <button onClick={onClick || undefined}>{title}</button>
  </div>
);

export default Button;
