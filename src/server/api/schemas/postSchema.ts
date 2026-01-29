// src/server/api/schemas/post.ts
import { z } from 'zod';

export const helloInputSchema = z.object({
  text: z
    .string()
    .min(1, { message: 'Text is required' }) // custom error message
    .max(50, { message: 'Text is too long' }),
});
