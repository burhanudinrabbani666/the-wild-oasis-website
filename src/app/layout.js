import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@/components/Header";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

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
      <body
        className={`${josefinSans.className} bg-primary-950 text-primary-50 flex min-h-screen flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
