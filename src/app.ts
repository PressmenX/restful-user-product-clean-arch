import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middlewares";
import { healthRouter } from "./routes";
import validate from "./middlewares/validate";
import { registerUserSchema } from "./schemas/registerInput";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server is alive!");
});

app.use("/health", healthRouter);
app.post("/register", validate(registerUserSchema), (req, res) => {
  res.json({ data: req.body });
});

app.use(errorHandler);

export default app;
