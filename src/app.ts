import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middlewares";
import { healthRouter, productRouter, userRouter } from "./routes";
import requireJsonContent from "./middlewares/requireJsonContent";
import YAML from "yamljs";
import path from "node:path";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(requireJsonContent)
app.use(express.json());

const swaggerDoc = YAML.load(path.join(import.meta.dirname, "./docs/swagger.yaml"))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.get("/", (_req, res) => {
  res.send("Server is alive!");
});

app.use("/health", healthRouter);
app.use("/users", userRouter)
app.use("/products", productRouter)

app.use(errorHandler);

export default app;
