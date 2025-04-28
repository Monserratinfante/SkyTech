import express from "express";
import cors from "cors";
import loginRoutes from "./routes/loginRoutes";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/api', loginRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});