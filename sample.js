<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="/css/style.css">
    <title>Title</title>
  </head>
  <body>
    <h1>Welcome to Images Folder</h1>
    <img src="/img/chinese-food.jpg" alt="wsfdds">
    <table class="table">
        <% data.forEach(element => { %>
            <tr><td><%- element.title  %></td></tr>
        <% });  %>
        </table>
  </body>
</html>





const express = require("express");
const app = express();
const axios = require("axios");
const { response } = require("express");

require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.static("public"))    

// Template Engines
app.set("view engine", "ejs");
app.set("views", "./views");

// Routes
app.get("/", async (req, res) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(data);
  res.render("index", { data: data });
});

app.listen(port, () => console.log(`Connected Port ${port} successfully!`));
