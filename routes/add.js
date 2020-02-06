var data = require("../data.json");

exports.addFriend = function(request, response) {
	var name = request.query.name;
	var desc = request.query.description;
	var newFriend = {
		"name": name,
		"description": desc,
		"imageURL": "http://lorempixel.com/400/400/people"			
	};
	console.log(name);
	console.log(desc);
	console.log(newFriend);
	data.friends.push(newFriend);
	console.log(data);
	response.render("index", data);
};