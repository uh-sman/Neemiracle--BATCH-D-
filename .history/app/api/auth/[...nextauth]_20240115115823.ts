import NextAuth, { AuthOptions } from 'next-auth';
// import GithubProvider from 'next-auth/providers/github';
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcrypt';
import prismadb from '@/lib/prismadb';

interface JwtCallbackProps {
    token: any,
    user: any
}
export const authOptions: AuthOptions = {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID || '',
        clientSecret: process.env.GITHUB_SECRET || '',
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      }),
      Credentials({
        id: 'credentials',
        name: 'Credentials',
        credentials: {
          email: {
            label: 'Email',
            type: 'text',
          },
          password: {
            label: 'Password',
            type: 'password' // corrected here
          }
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Email and password required');
          }
  
          const user = await prismadb.user.findUnique({ where: {
            email: credentials.email
          }});
  
          if (!user || !user.password) {
            throw new Error('Email does not exist');
          }
  
          const isCorrectPassword = await compare(credentials.password, user.password);
  
          if (!isCorrectPassword) {
            throw new Error('Incorrect password');
          }
  
          return user;
        }
      })
    ],
    pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/auth/error', // Error handling page
    },
    debug: process.env.NODE_ENV === 'development',
    adapter: PrismaAdapter(prismadb),
    session: { strategy: 'jwt' },
    callbacks: {
        async jwt(token: JwtCallbackProps['token'], user: JwtCallbackProps['user']) {
          if (user) {
            token.id = user.id;
          }
          return token;
        },
      },
  };
  
  export default NextAuth(authOptions);





// pages: {
//     signIn: '/auth/signin',
//     signOut: '/auth/signout',
//     error: '/auth/error', // Error handling page
//   },
//   callbacks: {
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//   },