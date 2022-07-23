import "./index.css";
import "./preview.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <div class="preview">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
