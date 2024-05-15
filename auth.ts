import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import { json } from 'stream/consumers';
import { headers } from 'next/headers';
import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'inspector';
 
/** for testing purposes only
async function getUser(email: string, password: string): Promise<User | undefined> {
  try 
  {
    //create and return a fake user as authenticated user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = <User>{
        id: '1',
        name: 'ddd',
        email: 'vz@gmail.com',
        username: 'jdoe',
        password: hashedPassword 
    };
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}*/
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) 
      {
        /**Login Form data validation */
        const parsedCredentials = z.object({ 
                email: z.string().email(), 
                password: z.string().min(6) 
            }).safeParse(credentials);
               
        if (parsedCredentials.success) 
        {
            //Login Form data is OK - call authentication API 
            /**for testing purposes only 
            console.log('Call authentication api');
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email, password);
            if (!user) return null;
             
            const passwordsMatch = await bcrypt.compare(password, user.password); // - 
            console.log(passwordsMatch);*//**end for testing purposes only */
            //if(passwordsMatch) return user;

            /** Above code is for authentication simulation - in order to use api, we use the below **/
            /***/
                const data = {
                  username: "jdoe@gmail.com",
                  password: "jdoe123456"
                };
                console.log(data);
                console.log(JSON.stringify(data));
                const authorization = headers().get('Authorization');
                const authResponse = await fetch("http://127.0.0.1:8888/ecsrm/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization
                },
                body: JSON.stringify(data),
                })

                if (!authResponse.ok) {
                  console.log("Auth response not OK");
                return null
                }                
                const user = await authResponse.json()
                console.log("Auth: " + authResponse.headers.get("authorization"));//get token or below
                console.log("Auth response OK, Bearer token - " + authResponse.headers.get("Authorization"));
                console.log(user);
                return user;
            /**/
        }else throw new Error("Login failed");
        //console.log('Invalid credentials!');
        
        //return null;
      },
    }),
  ],
  session: {
      strategy: 'jwt',
      //jwt: true,
      //maxAge: 30 * 24 * 60 * 60,
      maxAge: 1 * 1 * 15 * 60, //30 MIN
  },
  jwt: {
    maxAge: 1 * 1 * 1 * 60,
      signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
          token.accessToken = account.access_token;
      }
      if (user) {
          token.user = user;
      }
      return Promise.resolve(token); // 
    },
    async session({ session, token, user }) {
      session.user = token.user;
      return session; //
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
});