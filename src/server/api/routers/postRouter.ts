import {
  createTRPCRouter,
  publicProcedure,
} from '@/server/api/trpc';
import { helloInputSchema } from '../schemas/postSchema';

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(helloInputSchema)
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});
