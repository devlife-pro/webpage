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
      <body className="max-w-7xl mx-auto bg-[#231f2b]">
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
