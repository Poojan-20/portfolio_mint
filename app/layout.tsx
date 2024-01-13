import Navbar from "@/components/navbar";
import "./globals.css";
import { Outfit } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import Providers from "./providers";
import ThemeSwitcher from "@/components/Theme-switcher";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Poojan Patel | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36 dark:bg-[#121212] dark:text-gray-50 dark:text-opacity-90`}
      >
        <div style={{ transform: 'translate3d(0,0,0)' }} className="bg-[#e8b1b2] absolute top-[7rem] -z-10 right-[1rem] h-[61.25rem] w-[61.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] "></div>
        <div style={{ transform: 'translate3d(0,0,0)' }}  className="bg-[#a9a0e6] absolute top-[54rem] -z-10 left-[-36rem] h-[61.25rem] w-[61rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] md:top-[-1rem] md:h-[31.25rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <Providers>
          <ActiveSectionContextProvider>
            <Navbar />
            {children}
            <Footer />
            <ThemeSwitcher />
          </ActiveSectionContextProvider>
        </Providers>
      </body>
    </html>
  );
}
