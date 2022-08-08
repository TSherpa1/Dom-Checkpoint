const express = require("express");
const app = express();
const path = require("path");

//tried using express routes to render the coffeeclicker page

app.get("/", (req, res, next) => {
  res.send(`
  <html>
  <head>
  <title>Home Page</title>
  </head>
  <body>
  <h1>This is the home page!</h1>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5wpcc772g95mFYCA4Y_z6dG4TtMxud427w&usqp=CAU">
  </body>
  </html>
      `);
});

app.use("/coffeeClicker", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${3000}`);
});
