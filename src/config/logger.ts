import pino from "pino";

const isDevelopment = process.env.NODE_ENV === "development";

const logger = pino({
  level: isDevelopment ? "debug" : "info",
  transport: isDevelopment
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:HH:MM:ss", 
          ignore: "pid,hostname",
          colorizeObjects: true,
        },
      }
    : undefined,
});

export default logger;
