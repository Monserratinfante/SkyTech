import React from "react";
import { useLocation } from "react-router-dom";

function Welcome() {
  const location = useLocation();
  const { fullName } = location.state || { fullName: "Usuario" };

  return (
    <div>
      <h1>¡Hola, {fullName}! Bienvenido al portal de SkyTech.</h1>
    </div>
  );
}

export default Welcome;

export{};