<div align="center">
  
# browser-analytics

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]

<i> browser-analytics help you to send some browser metrics to your server from client app </i>

</div>

<h3>In Progress ⌛</h3>

- [ ] First Contentful Paint (FCP)
- [ ] Dom Load 
- [ ] Window Load

<h3>Completed ✅ </h3>

- [x] Time To First Byte

## Installation

```sh
$ npm install browser-analytics
```

[npm-downloads-image]: https://badgen.net/npm/dw/browser-analytics
[npm-url]: https://www.npmjs.com/package/browser-analytics
[npm-version-image]: https://badgen.net/npm/v/browser-analytics

## UI Example

<!-- eslint-disable no-unused-vars -->

```js
import { BrowserAnalytics } from 'browser-analytics';

....
useEffect(() => {
  const metric = new BrowserAnalytics({ apiEndpoint: "<your_api_endpoint>" }) 
  const pendingRes = metric.sendMetrics(); // Returns a Promise
  pendingRes.then(result => result.json()).then(formattedRes=>console.log(formattedRes));
})
....        
```
