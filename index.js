/* Performance Timing to get Browser Metrics
https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming
*/

// options as an object
// for now it's only get api endpoint 
function BrowserAnalytics(options) {
    if (options.apiEndpoint === null) {
        console.log("You should pass an endpoint to send metrics!");
    } else {
        this.API_ENDPOINT = options.apiEndpoint;
        this.performanceEntry = performance.getEntriesByType('navigation')[0];
    }
}

BrowserAnalytics.prototype.getFirstContentfulPaintMetric = function () {
    throw new Error('Method not implemented.');
}

BrowserAnalytics.prototype.getDomLoadMetric = function () {
    throw new Error('Method not implemented.');
}

BrowserAnalytics.prototype.getWindowLoadMetric = function () {
    throw new Error('Method not implemented.');
}

// Measure TTFB (Time To First Byte)
BrowserAnalytics.prototype.getTimeToFirstByteMetric = function () {
    return this.performanceEntry.responseStart - this.performanceEntry.requestStart;
}

// Send Metrics with built-in fetch api
BrowserAnalytics.prototype.sendMetrics = function () {
    return fetch(this.API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Accept-type': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ttfb: this.getTimeToFirstByteMetric(),
        }),
    });
}

module.exports.BrowserAnalytics = BrowserAnalytics;