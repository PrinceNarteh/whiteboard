import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  fullWidth?: Boolean;
};

const Button = ({ children, fullWidth, ...props }: ButtonProps) => {
  return (
    <button
      className={`py-2 text-center border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white duration-200 my-4 ${
        fullWidth && "w-full"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
