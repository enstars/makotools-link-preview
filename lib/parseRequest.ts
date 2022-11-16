import { NextRequest } from "next/server";

export function parseRequest(req: NextRequest) {
  const paramString = req.nextUrl.search.replace("?", "");

  let parameters: { [key: string]: string } = {};
  paramString.split("&").forEach((p) => {
    const [key, value] = p
      .split("=", 2)
      .map((s) => decodeURIComponent(s.replace(/\+/g, " ")));
    parameters[key] = value;
  });

  return parameters;
}
