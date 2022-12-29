import { join } from "path";

// Source .env for dev environment
if (process.env.NODE_ENV === "dev") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("dotenv").config({ path: join(__dirname, "..", ".env") });
}

console.log({ port: process.env.HTTP_DOMAIN });

//database
const databaseUrl = process.env.DATABASE_URL;

// server
const port = process.env.HTTP_PORT ? parseInt(process.env.HTTP_PORT) : 8000;
const domain = process.env.HTTP_DOMAIN || "localhost";
const env = process.env.NODE_ENV;

export default {
  databaseUrl,
  domain,
  env,
  port,
};
