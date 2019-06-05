/* main homepage route */

const express = require("express"),
      router = express.Router(),
      fs = require('fs');

let homeCounter = 0;
router.get("/", (request, response) => {
  homeCounter++;
  response.render("home", {title: "QDelivery",
                      author: "Sir. Alurence",
                      description: "Hello, I\'m Alurence. Welcome to QDelivery"});
  fs.writeFile("./analytics/homepage.txt", `${homeCounter} homepage visits so far`, (err) => {
      (err) && console.log(err);
  });
});

module.exports = router;
