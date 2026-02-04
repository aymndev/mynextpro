
import MainLayout from "./components/MainLayout";
import "./globals.css";
import MenuContextProvider from "@/context/MenuContext";



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

            <MainLayout>{ children }</MainLayout>

        </MenuContextProvider>




      </body>
    </html>
  );
}
