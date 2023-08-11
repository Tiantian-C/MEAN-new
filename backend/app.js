const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("ACCESS-control-Allow-Origin", "*");
  res.setHeader(
    "ACCESS-control-Allow-Header",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message:'Post added successfully!'
    })
})

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fsghsjjkk12",
      title: "first server-side post",
      content: "This is coming from server",
    },
    {
      id: "fsgkvhktttt12",
      title: "second server-side post",
      content: "This is coming from server!",
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts,
  });
});

module.exports = app;
