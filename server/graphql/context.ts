import { Context } from "@type";

const context = async ({ req }: { req: any }): Promise<Context> => {
  return { token: req.headers.token };
};

export default context;
