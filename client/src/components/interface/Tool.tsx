import React, { useState } from "react";

interface ToolProps extends React.HTMLAttributes<HTMLDivElement> {
  additionalClass?: string;
  label: string;
}

export const Tool = ({
  additionalClass,
  children,
  label,
  ...props
}: ToolProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`relative text-3xl p-1 cursor-pointer rounded hover:bg-gray-200 hover:text-cyan-500 duration-200 ${
        additionalClass && additionalClass
      }`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      {...props}
    >
      {children}

      {show && (
        <div className="absolute rounded text-sm left-[55px] top-1.5 bg-cyan-500 text-white py-1 px-2 font-semibold whitespace-nowrap">
          <span className="absolute -left-2 top-1.5 h-0 w-0 border-y-8 border-y-transparent border-r-8 border-r-cyan-500"></span>
          {label}
        </div>
      )}
    </div>
  );
};
