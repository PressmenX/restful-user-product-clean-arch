import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan"

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server is alive!");
});

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

export default app;
