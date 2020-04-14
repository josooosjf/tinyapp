const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require("body-parser");
const randomString = require("randomstring");
const urlDatabase = require("./src/data/urlDatabase");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

const generateRandomString = function()  {
  return randomString.generate({
    length : 6,
    charset : 'alphanumeric'
  });
};



app.get("/", (req,res) => {
  res.send("Hello!");
});

app.get("/urls.json", (req,res) => {
  res.json(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.get("/urls", (req, res) => {
  let templateVars = {urls : urlDatabase};
  res.render("urls_index", templateVars);
});

app.get("/urls/new", (req,res) => {
  res.render("urls_new");
});

app.post("/urls", (req,res) => {
  const randomStr = generateRandomString();
  urlDatabase[randomStr] = req.body.longURL;
  res.status(201).redirect("/urls");
});


app.post("/urls/:shortURL/delete", (req,res) => {
  delete urlDatabase[req.params.shortURL];
  res.redirect("/urls");
});

app.get("/u/:shortURL", (req,res) => {
  const longURL = urlDatabase[req.params.shortURL];
  res.redirect(longURL);
});

app.get("/urls/:shortURL", (req,res) => {
  let templateVars = { shortURL: req.params.shortURL, longURL: urlDatabase[req.params.shortURL] };
  res.render("urls_show", templateVars);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

