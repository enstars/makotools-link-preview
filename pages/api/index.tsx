import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { parseRequest } from "lib/parseRequest";
import Card from "pages/meta/card";
export const config = {
  runtime: "experimental-edge",
};

const inter = fetch(
  new URL("../../fonts/Inter-Regular.otf", import.meta.url)
).then((res) => res.arrayBuffer());
const interMedium = fetch(
  new URL("../../fonts/Inter-Medium.otf", import.meta.url)
).then((res) => res.arrayBuffer());
const interBold = fetch(
  new URL("../../fonts/Inter-Bold.otf", import.meta.url)
).then((res) => res.arrayBuffer());
const soraBold = fetch(
  new URL("../../fonts/Sora-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const username = searchParams.get("username");

  const interData = await inter;
  const interMediumData = await interMedium;
  const interBoldData = await interBold;
  const soraBoldData = await soraBold;

  const parameters = parseRequest(req);
  console.log(parameters);

  return new ImageResponse(<Card {...parameters} />, {
    width: 1200,
    height: 630,
    emoji: "fluent",
    // debug: true,
    fonts: [
      {
        name: "Inter",
        data: interData,
        weight: 400,
        style: "normal",
      },
      {
        name: "Inter",
        data: interMediumData,
        weight: 500,
        style: "normal",
      },
      {
        name: "Inter",
        data: interBoldData,
        weight: 700,
        style: "normal",
      },
      {
        name: "Sora",
        data: soraBoldData,
        weight: 700,
        style: "normal",
      },
    ],
  });
}
