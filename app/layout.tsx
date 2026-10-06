import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shaper's Academy",
  description:
    "Shaper's Academy - Focused learning, meaningful guidance, and a better path forward.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer></Footer>
      </body>
    </html>
  );
}