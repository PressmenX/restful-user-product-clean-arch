import { Server } from "node:http";
import logger from "../config/logger";

const gracefulShutdown = (
  server: Server,
  port: number,
  signal: NodeJS.Signals,
): void => {
  logger.info(`Sinyal ${signal} terdeteksi - memulai proses shutdown...`);

  server.close(() => {
    logger.info(`Server with Port ${port} is closed.`);

    logger.info(`All resources have been completed`);
    process.exit(0);
  });
};

export default gracefulShutdown;
