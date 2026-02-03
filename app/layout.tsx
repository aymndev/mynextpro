
import MainLayout from "./components/MainLayout";
import "./globals.css";



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

        <MainLayout>{ children }</MainLayout>


      </body>
    </html>
  );
}
