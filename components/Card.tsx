import React from "react";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="bg-white p-6 shadow-lg rounded-md flex items-center w-full space-x-6 h-full">{children}</div>;
};

export default Card;
