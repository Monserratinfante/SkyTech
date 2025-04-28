import { Router } from "express";
import { loginHandler } from "../handlers/loginHandler";
import { getEmployeesHandler } from "../handlers/getEmployeesHandler"; // Importa el nuevo handler

const router = Router();

router.post('/login', loginHandler);
router.get('/employees', getEmployeesHandler); // Nueva ruta para obtener empleados

export default router;