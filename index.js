const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

// Error handling for proxy
proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err);
  res.writeHead(502, { 'Content-Type': 'text/plain' });
  res.end('Bad Gateway');
});

// Create the HTTP server
const PORT = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://152.42.220.111:25568' }, (error) => {
    console.error('Error while proxying request:', error);
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('Bad Gateway');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});