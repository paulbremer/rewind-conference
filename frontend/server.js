const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const port = process.env.PORT || 3000;

app.prepare().then(() => {
    const server = express();

    server.use('/static', express.static('static'));

    server.get('*', (req, res) => {
        return app.render(req, res, '/', req.query);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
