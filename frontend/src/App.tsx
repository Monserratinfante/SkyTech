import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Login";
import Welcome from "./componentes/Welcome";
import Employees from "./componentes/Employees";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;