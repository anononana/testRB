import dotenv from "dotenv";
dotenv.config();

const env = process.env.NODE_ENV || "development";
const port = process.env.SERVER_PORT || 4300;

const config = {
  env,
  server: {
    protocol: env !== "development" ? "https://" : "http://",
    host: process.env.SERVER_HOST || `http://localhost:${port}`,
    port,
  },
  postgres: {
    host: process.env.PG_HOST || "localhost",
    port: Number(process.env.PG_PORT) || 5433,
    user: process.env.PG_USER || "postgres",
    password: process.env.PG_PASSWORD || "secret",
    db: process.env.PG_DATABASE || "testrb",
    logging: process.env.SEQUELIZE_LOG === "true",
    timezone: "+00:00",
  }
};

export default config;
