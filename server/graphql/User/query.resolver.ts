import { User } from "@type";

const user: User = {
  id: 1,
  firstName: "foo",
  lastName: "bar",
};

export const Query = {
  user: (): User => user,
};
