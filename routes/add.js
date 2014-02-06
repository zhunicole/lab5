var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var name = req.query.name;
	var description = req.query.description;
    var imageURL = 'http://lorempixel.com/400/400/people'
	console.log(name);
	console.log(description);
	console.log(imageURL);

	// res.render('add', {
	// 	'friends': [
	// 		{
	// 		'imageURL': imageURL,
	// 		'name': name,
	// 		'description': description
	// 		}
	// 	]
	// });

	var newFriend = {
		name: name,
		description: description,
		imageURL: imageURL
	};
	data['friends'].push(newFriend);

	res.render('add', data);
 }