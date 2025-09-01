 import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "./app/generated/prisma";
import GitHub from "next-auth/providers/github";

const prisma = new PrismaClient();

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});
/*import NextAuth from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "./app/generated/prisma";
import GitHub from "next-auth/providers/github";

const prisma = PrismaClient;

export const {auth,handlers,signIn,signOut} = NextAuth({
        session: {
            strategy: "jwt",
        },
        providers: [GitHub],
        adapter: PrismaAdapter(prisma),
        callbacks: {
            async jwt({ token, user }) {  
                if (user) {
                    token.id = user.id;
                    token.name = user.name;
                }
                return token;
            },
        
            async session({ session, token }) {
                if (session.user) {
                    session.user.id = token.id as string;
                    session.user.name = token.name as string;
                }

                return session;
            },
        },

})*/