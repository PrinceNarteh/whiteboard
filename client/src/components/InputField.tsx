import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({ type = "text", name, ...props }: InputProps) => {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        {...props}
        className="border w-full outline-none p-2 text-gray-500 my-1"
      />
    </div>
  );
};

export default InputField;
