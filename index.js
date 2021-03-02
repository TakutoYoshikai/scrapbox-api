const request = require("request");

function getPageList(projectName) {
  return new Promise((resolve, reject) => {
    const options = {
      url: "https://scrapbox.io/api/pages/" + encodeURIComponent(projectName),
      method: "GET"
    }
    request(options, function(err, response, body) {
      if (err) {
        reject(err);
        return;
      }
      console.log(body);
      resolve(JSON.parse(body));
    });
  });
}


function getPage(projectName, pageTitle) {
  return new Promise((resolve, reject) => {
    const options = {
      url: "https://scrapbox.io/api/pages/" + encodeURIComponent(projectName) + "/" + encodeURIComponent(pageTitle),
      method: "GET"
    }
    request(options, function(err, response, body) {
      if (err) {
        reject(err);
        return;
      }
      console.log(body);
      resolve(JSON.parse(body));
    });
  });
}

function getPageText(projectName, pageTitle) {
  return new Promise((resolve, reject) => {
    const options = {
      url: "https://scrapbox.io/api/pages/" + encodeURIComponent(projectName) + "/" + encodeURIComponent(pageTitle) + "/text",
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

function getPageIcon(projectName, pageTitle) {
  return new Promise((resolve, reject) => {
    const options = {
      url: "https://scrapbox.io/api/pages/" + encodeURIComponent(projectName) + "/" + encodeURIComponent(pageTitle) + "/icon",
      method: "GET"
    }
    request(options, function(err, response, body) {
      if (err) {
        reject(err);
        return;
      }
      resolve(Buffer.from(body));
    });
  });
}

module.exports = {
  getPageList,
  getPage,
  getPageText,
  getPageIcon
}
