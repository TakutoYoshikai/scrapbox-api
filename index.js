const request = require("request");

function get(url) {
  return new Promise((resolve, reject) => {
    const options = {
      url: url,
      method: "GET"
    }
    request(options, function(err, response, body) {
      if (err) {
        reject(err);
        return;
      }
      resolve(body);
    });
  });
}
async function getPageList(projectName) {
  const url = "https://scrapbox.io/api/pages/" + encodeURIComponent(projectName);
  return JSON.parse(await get(url));
}


async function getPage(projectName, pageTitle) {
  const url = "https://scrapbox.io/api/pages/" + encodeURIComponent(projectName) + "/" + encodeURIComponent(pageTitle);
  return JSON.parse(await get(url));
}

async function getPageText(projectName, pageTitle) {
  const url = "https://scrapbox.io/api/pages/" + encodeURIComponent(projectName) + "/" + encodeURIComponent(pageTitle) + "/text";
  return JSON.parse(await get(url));
}

async function getPageIcon(projectName, pageTitle) {
  const url = "https://scrapbox.io/api/pages/" + encodeURIComponent(projectName) + "/" + encodeURIComponent(pageTitle) + "/icon";
  return Buffer.from(await get(url));
}

module.exports = {
  getPageList,
  getPage,
  getPageText,
  getPageIcon,
}
