import "./globals.css";

export const metadata ={
  title: "Wed dev 2 demo",
  description: "Demos for Web dev 2",
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
