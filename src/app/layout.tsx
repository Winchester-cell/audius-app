import 'simplebar-react/dist/simplebar.min.css';
import "react-day-picker/dist/style.css";
import "@/styles/globals.css";
import Providers from "./providers";
import localFont from "next/font/local";

const mainFont = localFont({
  src: "../assets/fonts/app.ttf",
  variable: "--main-font",
})

const vazirReg = localFont({
  src:"../assets/fonts/vazir_reg.woff2",
  variable: "--main-persian",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mainFont.variable} ${vazirReg.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
