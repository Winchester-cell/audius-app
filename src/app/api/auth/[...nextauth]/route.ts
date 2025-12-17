import { userModel } from "@/models/user"
import dbConnect from "@/utils/database/dbConnect"
import NextAuth, { AuthOptions } from "next-auth"
import Google from "next-auth/providers/google"

export const authOptions: AuthOptions = {
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
        async signIn({ account, profile }) {
            if (account?.provider === 'google') {
                await dbConnect()
                const isUserExist = await userModel.findOne({ userID: profile?.sub })
                if (!isUserExist) {
                    await userModel.create({ name: profile?.name, email: profile?.email, accountType: 'google', userID: profile?.sub })
                }
            }
            return true
        },
        async jwt({ token, profile, account }) {
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