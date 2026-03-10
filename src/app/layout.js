import "./globals.css";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";

export const metadata = {
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurios cabin hotel, located in the the heart of the Italian dolomites, surrounded by beautifull mountains and dark forest",
  favicon: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-50 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
