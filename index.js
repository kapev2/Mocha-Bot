const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server instance
const proxy = httpProxy.createProxyServer({});

// Handle connection errors
proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err);
  res.writeHead(502, { 'Content-Type': 'text/plain' });
  res.end('Bad Gateway');
});

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Forward the request to the target server
  proxy.web(req, res, { target: 'http://de01-4.uniplex.xyz:6210' }, (error) => {
    // Handle errors that occur during the proxying process
    console.error('Error while proxying request:', error);
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('Bad Gateway');
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Proxy server is running on http://localhost:3000');
});