import { Html, Head, Main, NextScript } from "next/document";
import FooterComponent from "@/components/FooterComponent";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Arsenal+SC&family=Great+Vibes&family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="bg-orange-950">
        <Main />
        <NextScript />
      </body>
      <FooterComponent></FooterComponent>
    </Html>
  );
}
