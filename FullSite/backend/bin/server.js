'use strict'

import http from 'http';
import ip from 'ip';
import app from '../src/app.js';


const PORT = process.env.PORT || 5000;
const IP = ip.address();

app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);

console.log(`Server running at http://localhost:${PORT}/ - http://${IP}:${PORT}`);
