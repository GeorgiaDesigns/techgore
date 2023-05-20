import React from "react";
import { useLocation } from "wouter";

const BackButton = ({ model }) => {
  const [location, setLocation] = useLocation();

  const navigate = () => {
    modelInstance.remove(model);
    setLocation("/");
  };

  return (
    <div>
      <button onClick={() => navigate()}> {"<"} </button>
    </div>
  );
};

export default BackButton;
