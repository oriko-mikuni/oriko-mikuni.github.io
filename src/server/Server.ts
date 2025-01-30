import * as http from 'http';

function createServer(): http.Server {
    return http.createServer((req, res) => {

    });
}

async function startServer() {
    const server: http.Server;
    server = createServer();


}

try {
    startServer();
} catch (e) {
    console.error("Error starting server:", e);
}
