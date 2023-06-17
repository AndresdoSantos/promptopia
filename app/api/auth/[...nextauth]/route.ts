import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { AuthOptions } from 'next-auth'

import { connectToDB } from '@lib/database'
import User from '@models/user'

type SignInProps = {
  profile: { email: string; name: string; picture: string }
}

type SessionProps = {
  session: { user: { email: string; id: string } }
}

const handler: AuthOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async session({ session }: SessionProps) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      })

      session.user.id = sessionUser._id.toString()

      return session
    },
    async signIn({ profile }: SignInProps) {
      try {
        connectToDB()

        const userExists = await User.findOne({ email: profile?.email })

        if (!userExists) {
          await User.create({
            email: profile?.email,
            image: profile?.picture,
            username: profile?.name?.replace(' ', '').toLowerCase(),
          })
        }

        return true
      } catch (error) {
        console.log(error)

        return false
      }
    },
  },
})

export { handler as GET, handler as POST }
