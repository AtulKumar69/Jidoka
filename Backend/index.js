const express = require("express");
const http = require("http");
const io = require("socket.io");
const app = express();
const Server = http.createServer(app);
const page = new io.Server(Server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const data = [
  { name: 1, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 2, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 3, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 4, x: Math.random() * 10, y: Math.random() * 10 },
];
page.on("connection", (socket) => {
  console.log("connected successfully");
});


const port = 8080;
Server.listen(port, () => {
  console.log(`Server start ${port}`);
});
