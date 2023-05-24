import "./globals.css";
import NaveBar from "../components/NaveBar";
import AuthContext from "./context/AuthContext";
import "react-datepicker/dist/react-datepicker.css";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
     
      <head /> */}
      <body>
        <Providers>
          <main className="bg-gray-100 min-h-screen  dark:bg-zinc-900">
            <AuthContext>
              <main className="max-w-screen m-auto bg-gray-100  dark:bg-zinc-900 relative">
                <NaveBar />
                {children}
              </main>
            </AuthContext>
          </main>
        </Providers>
      </body>
    </html>
  );
}
