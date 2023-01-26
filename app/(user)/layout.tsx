import "../../styles/globals.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="text-white">
      <body className="mx-auto bg-[#110f15] max-w-6xl">
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
