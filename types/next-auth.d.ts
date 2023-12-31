import NextAuth, { DefaultSession, JWT, DefaultUser, User } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      userId: string
      username: string
      role: String
      verified: boolean
    } & DefaultSession['user']
  }

  interface User extends DefaultUser {
    username: string
    role: String
    verified: boolean
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    userId: string
    username: string
    role: String
    verified: boolean
  }
}
