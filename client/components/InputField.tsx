import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({ type = "text", ...props }: InputProps) => {
  return <input type={type} {...props} />;
};

export default InputField;
