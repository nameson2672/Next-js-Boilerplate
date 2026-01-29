import { auth } from '@clerk/nextjs/server';

export const authContext = async () => {
  return { auth: await auth() };
};

export type Context = Awaited<ReturnType<typeof authContext>>;
