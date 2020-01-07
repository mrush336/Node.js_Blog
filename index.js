const path = require("path");
const express = require("express");
const app = new express();

app.use((req, res, next) => {
  console.log('Time: ', + Date.now());
  next();
});
app.use(express.static("public"));
app.use(express.static("pages"));
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  //console.log(req);
  //console.log(res);
  next();
});


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});

app.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/post.html"));
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
