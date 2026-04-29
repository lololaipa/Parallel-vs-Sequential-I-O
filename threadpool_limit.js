const http = require('http');
const crypto = require('crypto');
const { promisify } = require('util');

const pbkdf2Async = promisify(crypto.pbkdf2);

const PORT = process.argv[2] || 3000;

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/threadpool-limit') {
    try {
      const t0 = Date.now();

      const tasks = Array.from({ length: 8 }, () =>
        pbkdf2Async('password', 'salt', 100000, 64, 'sha512')
      );

      await Promise.all(tasks);

      const durationMs = Date.now() - t0;

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        tasks: 8,
        durationMs
      }));

    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Computation error' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});