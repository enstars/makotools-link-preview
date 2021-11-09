const chromium = require("chrome-aws-lambda");

let _page;

async function getPage() {
  if (_page) {
    return _page;
  }

  const options =
    process.env.IS_PROD === "1"
      ? {
          args: chromium.args,
          executablePath: await chromium.executablePath,
          headless: true,
        }
      : {
          args: [],
          executablePath:
            process.platform === "win32"
              ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
              : process.platform === "linux"
              ? "/usr/bin/google-chrome"
              : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
          headless: true,
        };

  const browser = await chromium.puppeteer.launch(options);

  _page = await browser.newPage();

  return _page;
}

export async function getScreenshot(html, type) {
  const page = await getPage();

  await page.setViewport({ width: 1024, height: 585 });
  await page.setContent(html);

  return await page.screenshot({ type });
}
