// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	// console.log(data);
	res.render('index', data);
};



// exports.view = function(req, res){
//   res.render('index', {
//     'name': 'Waiting in Line',
//     'image': 'lorempixel.people.1.jpeg',
//     'id': 'project1'
//   });
// };

