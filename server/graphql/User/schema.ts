import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type User {
    id: Int
    firstName: String
    lastName: String
  }

  type Query {
    user(id: Int): User
  }
`);
