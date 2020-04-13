const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require("body-parser");
const randomString = require("randomstring");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

const generateRandomString = function()  {
  randomString.generate({
    length : 6,
    charset : 'alphanumeric'
  });
};

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
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
  console.log(req.body);
  res.send("Ok");
});

app.get("/urls/:shortURL", (req,res) => {
  let templateVars = { shortURL: req.params.shortURL, longURL: urlDatabase[req.params.shortURL] };
  res.render("urls_show", templateVars);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

// const generateRandomString = function() {
//   let randomString = "";
//   const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
//   const stringLength = 6;
//   for (let i = 0; i < stringLength; i++) {
//     const randomNum = Math.floor(Math.random() * chars.length);
//     randomString += chars.substring(randomNum, randomNum + 1);
//   }
//   return randomString;
// };