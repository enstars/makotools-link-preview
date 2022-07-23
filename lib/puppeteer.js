const playwright = require("playwright-aws-lambda");

let _page;

async function getPage() {
  if (_page) {
    return _page;
  }
  // console.log(chromium.executablePath);
  // const options =
  //   process.env.IS_PROD === "1"
  //     ? {
  //         args: chromium.args,
  //         executablePath: await chromium.executablePath,
  //         headless: true,
  //       }
  //     : {
  //         args: [],
  //         executablePath:
  //           process.platform === "win32"
  //             ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
  //             : process.platform === "linux"
  //             ? "/usr/bin/google-chrome"
  //             : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  //         headless: true,
  //       };

  // const browser = await chromium.puppeteer.launch(options);

  // _page = await browser.newPage();

  const browser = await playwright.launchChromium({
    headless: true,
  });
  const context = await browser.newContext();
  _page = await context.newPage();

  return _page;
}

export async function getScreenshot(html, type) {
  const page = await getPage();

  await page.setViewportSize({ width: 1200, height: 630 });
  await page.setContent(html);
  await page.waitForLoadState();
  // await page.goto("https://www.google.com");

  return await page.screenshot({ type: "png", omitBackground: true });
}
