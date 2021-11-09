function getCss() {
  return `
    @font-face {
        font-family: 'Roboto Mono', monospace;
        font-style:  normal;
        font-weight: normal;
        src: url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap");
    }

    body {
        background: white;
        background-size: 100px 100px;
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .logo-wrapper {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .logo {
        margin: 0 75px;
    }

    .spacer {
        margin: 50px;
    }
    
    .heading {
        font-family: 'Roboto Mono', monospace;
        font-size: 75px;
        font-style: normal;
        color: black;
        line-height: 1.8;
    }`;
}

export function getHtml({
    type,
    text,
    image,
    color,
}) {
    let previewContent = "";
  switch (type){
      case "character":
          previewContent = `
          <div>
            <div class="spacer">
            <div class="logo-wrapper">
              <img
              class="logo"
              alt="Generated Image"
              src="https://uchuu.ensemble.moe/file/ensemble-square/${image}"
              width="auto"
              height="300"
              />
            </div>
            <div class="spacer">
            <div class="heading">${sanitizeHtml(text)}
            </div>
        </div>`
          break;
  }
  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Automatic Social Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss()}
    </style>
    <body>
        ${previewContent}
    </body>
</html>`;
}

const entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};

export function sanitizeHtml(html) {
  return String(html).replace(/[&<>"'\/]/g, (key) => entityMap[key]);
}
