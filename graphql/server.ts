import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { Context } from "@type";

import context from "./context";
import path from "path";

// Merge and import schemas
const typeDefArray = loadFilesSync(
  path.join(__dirname, "src/**/schema.graphql")
);
const typeDefs = mergeTypeDefs(typeDefArray);

// Merge and import resolvers
const resolverArray = loadFilesSync(path.join(__dirname, "src/**/resolver.ts"));
const resolvers = mergeResolvers(resolverArray);

const server = new ApolloServer<Context>({ resolvers, typeDefs });

const main = async () => {
  const { url } = await startStandaloneServer(server, {
    context,
    listen: { port: 3000 },
  });

  console.log(`Ready at ${url}`);
};

main();
