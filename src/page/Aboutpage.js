import React from "react";
import { useNavigate } from "react-router-dom";

const Aboutpage = () => {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>aboutpage</h1>
      <button onClick={goToHomepage}>Go to Homepage</button>
    </div>
  );
};

export default Aboutpage;
