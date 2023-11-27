import Connectmongodb from "@/app/database/Connectmongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'


const authoptions = {
    providers: [
        GoogleProvider({
            clientId: '210476983974-lbfaoegtkrv3lhb56q3memm45hgkv0lr.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            console.log("User:", user)
            console.log("Account:", account)

            if (account.provider === 'google') {
                const { name, email } = user
                try {

                    await Connectmongodb()
                    const UserExists= await User.findOne({email})

if (!UserExists) {
    const res = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    })
    if (res.ok) {
        return user
    }
}

                  
                } catch (error) {
                    console.log(error)
                }
            }
            return user
        }
    }
}

const handler = NextAuth(authoptions)

export { handler as GET, handler as POST }
