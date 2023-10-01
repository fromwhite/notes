import { object, string, TypeOf, infer, z } from 'zod'

export const inviteSchema = z.object({
  email: z.string().email(),
})

export type InviteType = z.infer<typeof inviteSchema>
