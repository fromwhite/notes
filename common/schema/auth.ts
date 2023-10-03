import { object, string, TypeOf, infer, z } from 'zod'

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(12),
  cf_turnstile: z.string(),
})

export const signUpSchema = SignInSchema.extend({
  username: z.string(),
})

export type SignIn = z.infer<typeof SignInSchema>
export type SignUp = z.infer<typeof signUpSchema>
