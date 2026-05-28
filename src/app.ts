import express from "express";
import env from "./config/env";
import logger from "./config/logger";
import "dotenv/config";

const app = express();

app.listen(env.PORT, () => {
  logger.info(
    `The server is running in ${env.NODE_ENV} mode on http://localhost:${env.PORT}`,
  );
});
