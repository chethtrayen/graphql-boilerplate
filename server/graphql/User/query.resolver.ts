import { User } from "@type";

const user = {
  id: 1,
  firstName: "foo",
  lastName: "bar",
};

export const Query = {
  user: (): User => user,
};
