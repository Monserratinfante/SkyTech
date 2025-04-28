import React, { useEffect, useState } from "react";

interface Employee {
  fullName: string;
  email: string;
}

function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error al cargar empleados:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Empleados</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.fullName} - {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;

// Agrega esta línea al final del archivo
export {};