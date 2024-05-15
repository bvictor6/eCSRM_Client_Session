import SessionProvider from "./lib/SessionProvider"
import { auth } from "@/auth";
import "./globals.css";
import { roboto_serif,inter,lusitana } from "./ui/fonts";

export default async function RootLayout({ children }) {
    const session = await auth();
  
    return (
      <html lang="en">
        <body>
          <SessionProvider session={session}>
            {children}
          </SessionProvider>
        </body>
      </html>
    );
  }
