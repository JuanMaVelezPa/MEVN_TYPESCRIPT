import express from "express";
import morgan from "morgan";
import cors from "cors";
import tasksRoutes from "./routes/index";
import path from "path";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api", tasksRoutes);
app.use(express.static(path.join(__dirname, "..", "..", "dist")));

export default app;
