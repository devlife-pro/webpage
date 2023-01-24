import "../../../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="text-white">
      <body className="bg-[#231f2b]">
        {children}
      </body>
    </html>
  );
}