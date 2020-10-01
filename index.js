/* Performance Timing to get Browser Metrics
https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming
*/

// options as an object
// for now it's only gets api endpoint 
function BrowserAnalytics(options) {
    if (options.apiEndpoint === null) {
        console.log("You should pass an endpoint to send metrics!");
    } else {
        this.API_ENDPOINT = options.apiEndpoint;
        this.time = window.performance.timing;
    }
}

//Measure TFCP (Time of First Contentful Paint)
BrowserAnalytics.prototype.getFirstContentfulPaintMetric = function () {
    //throw new Error('Method not implemented.');
    return window.performance.getEntriesByType("paint")[1].startTime;
}

// Measure TTLD (Time To Load DOM)
// https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domLoading
BrowserAnalytics.prototype.getDomLoadMetric = function () {
    //throw new Error('Method not implemented.');
    return performanceTiming.domLoading;
}


// Measure TTLW (Time To Load Window)
// reference:https://developer.mozilla.org/en-US/docs/Web/Performance/Navigation_and_resource_timings
BrowserAnalytics.prototype.getWindowLoadMetric = function () {
    //throw new Error('Method not implemented.');
    return this.time.loadEventStart-this.time.navigationStart;
}

// Measure TTFB (Time To First Byte)
// reference:https://developer.mozilla.org/en-US/docs/Web/Performance/Navigation_and_resource_timings
BrowserAnalytics.prototype.getTimeToFirstByteMetric = function () {
    return this.time.responseStart - this.time.navigationStart;
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
            ttlw: this.getWindowLoadMetric(),
            ttld: this.getDomLoadMetric(),
            FCPM: this.getFirstContentfulPaintMetric()
        }),
    });
}

module.exports.BrowserAnalytics = BrowserAnalytics;