import { employees } from "../DB/employees";

export function validateLogin(username: string, password: string) {
  const employee = employees.find(emp => emp.username === username && emp.password === password);
  return employee || null;
}


