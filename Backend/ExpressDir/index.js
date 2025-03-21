const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello , i am root");
});

app.get("/:username/:id", (req, res) => {
  let {username , id}= req.params;
  res.send(`welcometo the page of @${username}`);
});

app.get("/search", (req, res)=>{
    // console.log(req.query);
    // res.send("no results");
    let {q}= req.query;
    if (!q){
        res.send("No search query");
    }
    res.send(`search result for query: ${q}`);
})


// app.get("/apple", (req, res) => {
//   res.send("you contacted apple path");
// });
// app.get("/orange", (req, res) => {
//   res.send("you contacted orange path");
// });
// app.get("*", (req, res) => {
//   res.send("this path does not exist");
// });

// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1> Fruits </h1> <ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// });
