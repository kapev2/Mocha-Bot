const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://sgp1.hmvhostings.com:25687/' });
});
server.listen(25687, () => {
  console.log('Proxy server is running on http://localhost: 25687');
});