import "./globals.css";

export const metadata = { title: "ByteSpace", description: "ByteSpace Courses ." };

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}