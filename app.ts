import express from "express";
import env from "./src/config/env"

const app = express()

app.listen(env.PORT, () => {
  console.log(`The server is running in ${env.NODE_ENV} mode on http://localhost:${env.PORT}`);
})