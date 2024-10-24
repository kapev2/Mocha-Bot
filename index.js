const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://de3.bot-hosting.net:21423' });
});
server.listen(8080, () => {
  console.log('Proxy server is running on http://localhost:8080');
});
