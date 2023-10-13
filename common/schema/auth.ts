import { object, string, TypeOf, infer, z } from 'zod'

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password cannot exceed 20 characters')
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      'Password must contain at least one letter and one number'
    ),
  cf_turnstile: z.string(),
})

export const signUpSchema = SignInSchema.extend({
  username: z.string().min(4).max(20),
  token: z.string(),
})

export type SignIn = z.infer<typeof SignInSchema>
export type SignUp = z.infer<typeof signUpSchema>
