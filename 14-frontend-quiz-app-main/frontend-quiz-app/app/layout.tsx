import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-light-grey dark:bg-dark-navy font-rubik text-navy dark:text-white">
        {children}
      </body>
    </html>
  );
}
