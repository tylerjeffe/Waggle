var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });



module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    let userScores = req.body;
    for (var i = 0; i < userScores.scores.length; i++) {
      userScores.scores[i] = parseInt(userDetails.scores[i]);
    }

  

    let currentFriend = 0;
    let newFriend = 0;

    for (var i = 0; i < friends.length; i++) {
      let tmp = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        let difference = Math.abs(userDetails.scores[j] - friends[i].scores[j]);
        tmp = tmp+difference;
      }
      if (tmp < min) {
        currentFriend = i;
        newFriend = total;
      }
    }
    friends.push(userDetails);
    res.json(friends[currentFriend]);
  });
}