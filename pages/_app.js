import "./index.css";
import "./preview.css";
import Head from "next/head";

const testProps = {
  title: "Heartfelt Bouquet",
  name: "Mao Isara",
  image1: "card_rectangle4_2816_normal.webp",
  image2: "card_rectangle4_2816_evolution.webp",
  stats1: "90753",
  stats2: "111",
  stats3: "199999",
  path: "/cards/2816",
  // skill1name: "思い揺れる鐘の音",
  skill1desc: "Increases Vo of all Flash cards by 120%",
  // skill2name: "想像力の行方",
  skill2desc: "Increases the score by 12% for 16 seconds.",
  // skill3name: "思い揺れる鐘の音",
  skill3desc: "Increases the drop rate of large blue stat pieces by 70%.",
  // stats1=90%2C753&stats2=103%2C479&stats3=117%2C897&path=%2Fcards%2F2816
};

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
      <Component {...pageProps} {...testProps} />
    </div>
  );
}

export default MyApp;
