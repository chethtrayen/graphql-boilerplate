import { join } from "path";

require("dotenv").config({ path: join(__dirname, "..", ".env") });

//database
const databaseUrl = process.env.DATABASE_URL;

// server
const port = parseInt(process.env.HTTP_PORT);
const domain = process.env.HTTP_DOMAIN;

export default {
  databaseUrl,
  domain,
  port,
};
