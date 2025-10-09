import Footer from "@/components/layout/Footer";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ClientWrapper from "@/components/layout/ClientWrapper";

export const metadata = {
  title: "Zoskales Jewelry",
  description: "Jewelry Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <ClientWrapper>{children}</ClientWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
