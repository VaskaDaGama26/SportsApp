import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Button = ({ label, route }) => {
  const [toRoute, setToRoute] = useState(false);

  if (toRoute) {
    return <Navigate to={route} />;
  }

  return (
    <button
      onClick={() => setToRoute(true)}
      className="w-fit text-2xl md:text-3xl english-text flex gap-2 bg-primary px-8 py-3 items-center transition duration-300 hover:shadow-(--shadow3) cursor-pointer"
    >
      {label}
      <img className="h-6 md:h-8" src="/arrow_right.svg"></img>
    </button>
  );
};

export default Button;
