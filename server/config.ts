// Source .env for dev environment
if (process.env.NODE_ENV === "dev") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("dotenv");
}

//database
const databaseUrl = process.env.DATABASE_URL;

// server
const port = process.env.HTTP_PORT ? parseInt(process.env.HTTP_PORT) : 8000;
const domain = process.env.HTTP_DOMAIN || "localhost";
const env = process.env.NODE_ENV;
const serverUri = process.env.SERVER_URI;

export default {
  databaseUrl,
  domain,
  env,
  port,
  serverUri,
};
