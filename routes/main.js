module.exports = function(app) {

	// define utils
	var validateVar = require('./utils.js').validateVar,
		validateUsername = require('./utils.js').validateUsername,
		validatePassword = require('./utils.js').validatePassword,
		validateFirstName = require('./utils.js').validateFirstName,
		validateLastName = require('./utils.js').validateLastName,
		validateZipCode = require('./utils.js').validateZipCode;

	/*
	 * POST Validate - Var
	 */
	app.post('/validate/var', function(req, res){
		var variable = req.param('variable');
		if(validateVar(variable)){
			res.json({
				success: true,
			});
		} else {
			res.json({
				success: false,
				error: 'not valid'
			});
		};
		return;
	});

	/*
	 * POST Validate - Username
	 */
	app.post('/validate/username', function(req, res){
		var username = req.param('username');
		if(validateUsername(username)){
			res.json({
				success: true,
			});
		} else {
			res.json({
				success: false,
				error: 'not valid'
			});
		};
		return;
	});

	/*
	 * POST Validate - Password
	 */
	app.post('/validate/password', function(req, res){
		var password = req.param('password');
		if(validatePassword(password)){
			res.json({
				success: true,
			});
		} else {
			res.json({
				success: false,
				error: 'not valid'
			});
		};
		return;
	});

	/*
	 * POST Validate - First Name
	 */
	app.post('/validate/firstname', function(req, res){
		var firstname = req.param('firstname');
		if(validateFirstName(firstname)){
			res.json({
				success: true,
			});
		} else {
			res.json({
				success: false,
				error: 'not valid'
			});
		};
		return;
	});

	/*
	 * POST Validate - Last Name
	 */
	app.post('/validate/lastname', function(req, res){
		var lastname = req.param('lastname');
		if(validateLastName(lastname)){
			res.json({
				success: true,
			});
		} else {
			res.json({
				success: false,
				error: 'not valid'
			});
		};
		return;
	});

	/*
	 * POST Validate - US Zip Code
	 */
	app.post('/validate/zipcode', function(req, res){
		var zipcode = req.param('zipcode');
		if(validateZipCode(zipcode)){
			res.json({
				success: true,
			});
		} else {
			res.json({
				success: false,
				error: 'not valid'
			});
		};
		return;
	});

};