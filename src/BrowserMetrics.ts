interface BrowserMetrics {
  getTimeToFirstByteMetric(): any;
  getFirstContentfulPaintMetric(): any;
  getDomLoadMetric(): any;
  getWindowLoadMetric(): any;
}

export default BrowserMetrics;
