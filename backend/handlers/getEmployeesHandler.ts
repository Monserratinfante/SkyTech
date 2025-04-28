import { Request, Response } from "express";
import { employees } from "../DB/employees";

export function getEmployeesHandler(req: Request, res: Response) {
  res.status(200).json(employees);
}