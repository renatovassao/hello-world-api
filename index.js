const http = require('http');

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var response = {message: "Hello World"};
    res.end(JSON.stringify(response));
});

app.listen(3000, () => {
    console.log("Hello World API server is listening on port 3000");
});


