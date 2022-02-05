# scrapbox-api
This is a Node.js library to fetch data from scrapbox.
See [here](https://scrapbox.io/help-jp/API).

### Warning
It may be not able to use this API in the future by scrapbox changes.

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

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### License
MIT License
