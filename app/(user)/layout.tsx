import "../../styles/globals.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="text-white">
      <body className="bg-[#231f2b]">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
