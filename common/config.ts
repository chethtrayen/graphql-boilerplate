import { join } from "path";

if (process.env.NODE_ENV === "dev")
  require("dotenv").config({ path: join(__dirname, "..", ".env") });

//database
const databaseUrl = process.env.DATABASE_URL;

// server
const port = parseInt(process.env.HTTP_PORT) || 8000;
const domain = process.env.HTTP_DOMAIN || "localhost";
const env = process.env.NODE_ENV;

export default {
  databaseUrl,
  domain,
  env,
  port,
};
