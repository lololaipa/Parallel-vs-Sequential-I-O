const http = require('http');
const fs = require('fs').promises;

const PORT = process.argv[2] || 3000;

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/sequential') {
    try {
      const t0 = Date.now();

      const a = await fs.readFile('a.txt', 'utf-8');
      const b = await fs.readFile('b.txt', 'utf-8');
      const c = await fs.readFile('c.txt', 'utf-8');

      const combined = a.trim() + b.trim() + c.trim();
      const elapsedMs = Date.now() - t0;

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ combined, elapsedMs }));

    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'File read error' }));
    }
  } else {
    // всі інші маршрути / методи
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});