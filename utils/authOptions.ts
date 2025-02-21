/* eslint-disable @typescript-eslint/no-explicit-any */
import dbConnect from "@/lib/db";
import User from "@/model/User";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      // Nếu authorize trả về falsy thì tức là đăng nhập thất bại
      authorize: async (credentials: any) => {
        const { email, password } = credentials;

        try {
          await dbConnect();
          const existedUser: any = await User.findOne({ email }).lean();

          if (!existedUser) return null;

          const passwordMatch = await bcrypt.compare(
            password,
            existedUser.password
          );
          if (!passwordMatch) return null;

          return existedUser as any;
        } catch (error: any) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = (user as any).role;
      return token;
    },
    async session({ session }) {
      await dbConnect();
      const user: any = await User.findOne({
        email: session.user?.email,
      }).lean();
      if (user)
        session.user = {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          image: user?.avatar?.url || "",
        } as any;

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};
