<div align="center">
  
# browser-analytics

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]

<i> browser-analytics help you to send some browser metrics to your server from client app </i>

</div>

<h3>In Progress ⌛</h3>
- [x] First Contentful Paint (FCP)

<h3>Completed ✅ </h3>

- [x] Time To First Byte
- [x] Dom Load 
- [x] Window Load

## Installation

```sh
$ npm install browser-analytics
```

[npm-downloads-image]: https://badgen.net/npm/dw/browser-analytics
[npm-url]: https://www.npmjs.com/package/browser-analytics
[npm-version-image]: https://badgen.net/npm/v/browser-analytics

## Example

<!-- eslint-disable no-unused-vars -->

### Client Side 

```js
import { BrowserAnalytics } from 'browser-analytics';

....
useEffect(() => {
 const metric = new BrowserAnalytics({ apiEndpoint: "http://localhost:3001/metrics" })
 const pendingRes = metric.sendMetrics();
 pendingRes.then(result => result.json()).then(formattedRes=>console.log(formattedRes));
})
....        
```
### Server Side

```js
metricsRouter.post('/metrics', function (req, res) {
    const metrics = req.body;
  
         // do some stuff
            ...
            res.send(metrics);
        }
    });
})
```
