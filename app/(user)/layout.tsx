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
    <html className="text-white overflow-x-clip scrollbar-hide">
      <body className="mx-auto bg-gradient-to-tr from-[#5f00925b] via-[#110f15] to-via-[#110f15] background-animate animate-bg">
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
