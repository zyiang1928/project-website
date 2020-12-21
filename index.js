console.log("[Website] Launching...");

const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

app.use(express.static("public"));

app.get("/", function(request, response) {
  console.log("[Website] Pinging!");
  response.sendStatus(200);
  response.sendFile(__dirname + "./index.html");
});
server.listen(process.env.PORT, function() {
  console.log(`[Website] Listening on port: ${process.env.PORT}`);
});

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);