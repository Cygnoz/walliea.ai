import { createServer } from 'http';
import serve from 'serve-handler';

const server = createServer(async (req, res) => {
  try {
    await serve(req, res, {
      public: 'build',
      rewrites: [
        { source: '**', destination: '/index.html' }
      ]
    });
  } catch (err) {
    console.error('Error serving files:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(5173, () => {
  console.log('Server is listening on port 5173');
});
