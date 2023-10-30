import "./globals.css";
import { Inter } from "next/font/google";

import ThemeProviderComponent from "@/components/SwitchTheme/ThemeProviderComponent";
import StoreProvider from "@/store/StoreProvider";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aniw",
  description: "",
  keywords: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviderComponent>
          <StoreProvider>
            <div className="wrapper dark:bg-custom-black-500 relative bg-custom-gray-100">
              <Header />
              {children}
            </div>
          </StoreProvider>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
