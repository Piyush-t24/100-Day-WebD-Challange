const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
// uuidv4();    //*->  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "apnacollege",
    content: "I love coding!",
  },
  {
    id: uuidv4(),
    username: "piyushgupta",
    content: "Hard work is important to achieve success",
  },
  {
    id: uuidv4(),
    username: "rahulkumar",
    content: "I got selected for my 1st internship!",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs"); //Form aa gya
});

// New post create kr rhe
app.post("/posts", (req, res) => {
  let { username, content } = req.body; //destructure krke username aur content nikal lenge.
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts"); //by default get request hi bhejega
});

// To find out the post
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

// To Edit anything
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params; //id nikal skte hai
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id); //post ko dhundh skte hai
  post.content = newContent;
  console.log(post);
  res.send("patch request working");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", {post});
});

app.listen(port, () => {
  console.log("listening to port : 8080");
});
