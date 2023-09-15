// server.js
const express = require("express");
// Our DB Configuration
//require('./src/database');

// Routes
//const postRouter = require("./src/routes/post.router");
const testRouter = require("./src/routes/test.router");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Habilitar CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://tlbtzrb3-5173.usw3.devtunnels.ms');
  // Otros encabezados de CORS según tus necesidades
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World ! ");
});

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});

//app.use("/posts", postRouter);

app.use("/test", testRouter);

// app.use(function(req, res) {
//   res.sendFile(path.join(__dirname, '../client','build','index.html'));
// });
