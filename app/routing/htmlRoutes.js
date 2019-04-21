var path = require("path");

var friendsData = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../publichome.html"));
  });
};

app.post("/api/friends", function(req, res) {
 
      friendsData.push(req.body);
      res.json(true);
    });