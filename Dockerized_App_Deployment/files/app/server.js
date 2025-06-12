const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.end('🚀 Node.js app deployed via Ansible + Docker!');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

