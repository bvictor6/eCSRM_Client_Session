{/**Configuration options for NextAuth.ts **/}
import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: 
  {
      authorized({ auth, request: { nextUrl } }) 
      {
        const isLoggedIn = !!auth?.user;
        const isOnDashboard = nextUrl.pathname.startsWith('/home');
        if (isOnDashboard) {
          if (isLoggedIn) return true;
          return false; // Redirect unauthenticated users to login page
        } else if (isLoggedIn) {
          return Response.redirect(new URL('/home', nextUrl));
        }
        return true;
      },
      
      session: async ({ session, token, user }) => {
        // Modify session data based on token information
        //session.user.isAdmin = token.user.role === "admin";
        console.log("Session user email is : " + JSON.stringify(token));
        token.email = session.user.email;
        return session;
      },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;