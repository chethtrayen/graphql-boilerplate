import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type User {
    id: Int
  }

  type Query {
    users: [User]
  }
`);
