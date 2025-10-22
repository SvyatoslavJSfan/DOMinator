/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken')
const path = require('path');
const https = require('https');

const options = {
    key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname,'cert.pem')),
};

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});


server.use(jsonServer.bodyParser);


server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});


// eslint-disable-next-line
// server.use((req, res, next) => {
//     if (!req.headers.authorization) {
//         return res.status(403).json({ message: 'AUTH ERROR' });
//     }

//     next();
// });

server.use(jsonServer.defaults());


server.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.use(router);

const PORT = 8443;
const httpsServer = https.createServer(options, server);

httpsServer.listen(PORT, '127.0.0.1', () => {
    console.log(`server is running on 127.0.0.1${PORT} port`);
});
