import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="md:mx-40 mx-4">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
