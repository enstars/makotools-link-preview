import { parse } from "url";

export function parseRequest(req) {
  const query = req.url.replace("/render/", "");
  const [type, fileType] = query.split(/[\.?]/, 2);
  let parameters = {};
  query
    .replace(/.*?\..*?\?/, "")
    .split("&")
    .forEach((p) => {
      const [key, value] = p.split("=", 2).map(decodeURIComponent);
      parameters[key] = value;
    });

  return {
    type,
    fileType,
    ...parameters,
  };
  // const { pathname, query } = parse(req.url || "/", true);
  // const { width, height, image, title, color } = query || {};

  // const arr = (pathname || "/").slice(8).split(".");

  // let extension = "";
  // let text = "";

  // if (arr.length === 0) {
  //   text = "";
  // } else if (arr.length === 1) {
  //   text = arr[0];
  // } else {
  //   extension = arr.pop();
  //   text = arr.join(".");
  // }
  // switch (decodeURIComponent(text)) {
  //   case "card":
  //     break;
  //   case "character":
  //     const parsedRequest = {
  //       type: decodeURIComponent(text),
  //       fileType: extension,
  //       text: title,
  //       image: image,
  //       color: color,
  //     };

  //     return parsedRequest;
  //     break;
  // }
  // const parsedRequest = {
  //   fileType: extension,
  //   text: "Error",
  // };

  // return parsedRequest;
}
