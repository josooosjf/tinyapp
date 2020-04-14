const express = require('express');
const bodyParser = require("body-parser");
// const generateRandomString = require("./src/utils/generateRandomString");
// const urlDatabase = require("./src/data/urlDatabase");
const path = require('path');
const urlRouter = require('./src/routes/urlRoutes');

const app = express();


app.set("view engine", "ejs");

// Setting the path where to point the view engine
app.set('views', path.join(__dirname, 'src/views'));



app.use(bodyParser.urlencoded({extended: true}));


// app.get("/urls/:shortURL", (req,res) => {
//   let templateVars = { shortURL: req.params.shortURL, longURL: urlDatabase[req.params.shortURL] };
//   res.render("urls_show", templateVars);
// });


app.use('/urls', urlRouter);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


module.exports = app;
