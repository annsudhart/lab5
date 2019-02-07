var data = require("../data.json");

exports.addFriend = function(request, response) {
	// Your code goes here
  var newName = request.query.name;
  var newDescription = request.query.description;
  var newFriend = {
    'name': newName,
    'description': newDescription,
    'imageURL': "http://lorempixel.com/500/500/people"
  }
  data.friends.push(newFriend);
  console.log(newFriend);
}
