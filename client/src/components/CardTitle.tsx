import React from "react";

const CardTitle = ({ text }: { text: string }) => {
  return (
    <h3 className="text-4xl md:text-5xl text-center text-teal-500 mb-10">
      {text}
    </h3>
  );
};

export default CardTitle;
