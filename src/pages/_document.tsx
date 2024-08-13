import { Html, Head, Main, NextScript } from "next/document";
import FooterComponent from "@/components/FooterComponent";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-orange-950">
        <Main />
        <NextScript />
        <FooterComponent></FooterComponent>
      </body>
    </Html>
  );
}
