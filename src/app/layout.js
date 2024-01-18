import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Web Convite",
  description: "Website convite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/convite-ana.appspot.com/o/icon%2FiconW.png?alt=media&token=8b316d64-b6ee-4748-a264-42843c4702c6&_gl=1*lsjoq7*_ga*NjEzNTQ2MjM5LjE2ODUxMDI3MDM.*_ga_CW55HF8NVT*MTY5NjUzNDUxOS4xNDguMS4xNjk2NTM0ODgxLjI5LjAuMA.."
        />
      </head>
      <body style={josefinSans.style}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
