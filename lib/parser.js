import { parse } from "url";

export function parseRequest(req) {
  console.log(req.url);

  const { pathname, query } = parse(req.url || "/", true);
  const { width, height, image, title, color } = query || {};

  const arr = (pathname || "/").slice(1).split(".");

  let extension = "";
  let text = "";

  if (arr.length === 0) {
    text = "";
  } else if (arr.length === 1) {
    text = arr[0];
  } else {
    extension = arr.pop();
    text = arr.join(".");
  }
  switch (decodeURIComponent(text)){
    case "card":
      break;
    case "character":
      const parsedRequest = {
        type: decodeURIComponent(text),
        fileType: extension,
        text: title,
        image: image,
        color: color
      };
    
      return parsedRequest;
      break;
    }
    const parsedRequest = {
      fileType: extension,
      text: "Error"
    };
  
    return parsedRequest;
}
