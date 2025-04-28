import { Request, Response } from "express";
import { validateLogin } from "../controllers/loginController";

export function loginHandler(req: Request, res: Response) {
  const { username, password } = req.body;

  // Usa la función validateLogin para validar las credenciales
  const employee = validateLogin(username, password);

  if (employee) {
    res.status(200).json({
      message: `¡Hola, ${employee.fullName}! Bienvenido al portal de SkyTech.`,
      employee: {
        fullName: employee.fullName,
        email: employee.email,
      },
    });
  } else {
    res.status(401).json({ message: "Usuario o contraseña incorrectos." });
  }
}