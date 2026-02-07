import type { Metadata } from "next";
import MainLayout from "./components/MainLayout";
import "./globals.css";
import MenuContextProvider from "@/context/MenuContext";
import CardContextProvider from "@/context/CardContext";


export const metadata: Metadata = {
  title: "Next js",
  description: "this is my project ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <CardContextProvider>

              <MainLayout>{ children }</MainLayout>
          </CardContextProvider>

            

        </MenuContextProvider>




      </body>
    </html>
  );
}
