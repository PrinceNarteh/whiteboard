import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full border p-10 bg-white rounded">{children}</div>;
};
