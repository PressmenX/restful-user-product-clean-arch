import app from "./app";
import env from "./config/env";
import logger from "./config/logger";
import gracefulShutdown from "./utils/shutdown";

const server = app.listen(env.PORT, "0.0.0.0", () => {
  logger.info(
    `The server is running in ${env.NODE_ENV} mode on http://localhost:${env.PORT}`,
  );
  logger.info(`PID : ${process.pid}`);
});

process.on("SIGTERM", () => gracefulShutdown(server, env.PORT, "SIGTERM"));
process.on("SIGINT", () => gracefulShutdown(server, env.PORT, "SIGINT"));
