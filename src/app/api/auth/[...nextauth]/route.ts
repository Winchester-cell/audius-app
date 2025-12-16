import NextAuth, { AuthOptions } from "next-auth"
import Google from "next-auth/providers/google"
import { randomUUID } from "crypto"

const authOptions: AuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, profile ,account }) {
            if (profile && account) {
                token.id = profile.sub
            }
            return token
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
            }
            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }