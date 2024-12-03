const http = require('http');
const httpProxy = require('http-proxy');
const port = process.env.PORT || 5000;
const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://de01.uniplex.xyz:5109/' });
});
server.listen(port, () => {
  console.log('Proxy server is running on http://localhost: 5109');
});