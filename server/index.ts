// Alias ts paths when running in production
if (process.env.NODE_ENV === "prod") require("module-alias/register");

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

import config from "@config";
import { Context } from "@type";

import bodyParser, { json } from "body-parser";
import cors from "cors";
import express from "express";
import http from "http";
import path from "path";

import context from "./graphql/context";

const startServer = async () => {
  const { domain, port } = config;
  const url = `http://${domain}:${port}`;

  // Merge and import schemas
  const typeDefArray = loadFilesSync(
    path.join(__dirname, `graphql/**/schema.*`)
  );
  const typeDefs = mergeTypeDefs(typeDefArray);

  // Merge and import resolvers
  const resolverArray = loadFilesSync(
    path.join(__dirname, `graphql/**/resolver.*`)
  );

  const resolvers = mergeResolvers(resolverArray);

  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer<Context>({
    resolvers,
    typeDefs,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(bodyParser.json());
  app.use(cors());

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, { context })
  );

  await new Promise((res) => {
    httpServer.listen(port, domain);
    res(null);
  });

  console.log(`Ready at ${url}`);
  console.log(`Access GraphQl at ${url}/graphql`);
};

startServer();
