# scrapbox-api
This is a node.js library to fetch data from scrapbox.
See [here](https://scrapbox.io/help-jp/API).

### Usage
**install**
```bash
npm install --save TakutoYoshikai/scrapbox-api
```

**example**
```javascript
const { getPageList, getPage, getPageText, getPageIcon } = require("scrapbox-api");

(async () => {
  const pageList = await getPageList("<project name>");
  const page = await getPage("<project name>", "<page title>");
  const text = await getPageText("<project name>", "<page title>");
  const icon = await getPageIcon("<project name>", "<page title>"); //Buffer
})();
```

### License
MIT License
