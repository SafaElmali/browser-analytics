/* Performance Timing to get Browser Metrics
https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming
*/

// options parameter 
function browserAnalytics(options) {
    this.API_ENDPOINT = options.apiEndpoint;
    this.performanceEntry = performance.getEntriesByType('navigation')[0];

    getFirstContentfulPaintMetric() {
        throw new Error('Method not implemented.');
    }
    getDomLoadMetric() {
        throw new Error('Method not implemented.');
    }
    getWindowLoadMetric() {
        throw new Error('Method not implemented.');
    }

    // Measure TTFB (Time To First Byte)
    getTimeToFirstByteMetric() {
        return this.performanceEntry.responseStart - this.performanceEntry.requestStart;
    }

    // Send Metrics with built-in fetch api
    sendMetrics() {
        fetch(this.API_ENDPOINT, {
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
}

module.exports.browserAnalytics = browserAnalytics;