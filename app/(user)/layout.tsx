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
      <body className="mx-auto bg-[#110f15]">
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
