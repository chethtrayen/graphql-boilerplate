import { Context } from "@type";

const context = async ({ req }): Promise<Context> => {
  return { token: req.headers.token };
};

export default context;
