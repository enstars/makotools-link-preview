import * as ReactDOMServer from "react-dom/server";
import styles from "!raw-loader!../pages/index.css";

import Character from "../pages/meta/character";
import Card from "../pages/meta/card";
const pagesType = {
  character: Character,
  card: Card,
};

export function getHtml({ type, ...props }) {
  console.log(props);
  const Component = pagesType[type];
  const html = ReactDOMServer.renderToStaticMarkup(<Component {...props} />);

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&display=swap" rel="stylesheet"> 
    <link href="https://rsms.me/inter/inter.css" rel="stylesheet"> 
    <style>${styles}</style>
  </head>
  <body>${html}</body>
</html>
`;
}
