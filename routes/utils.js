/*
 * validate var
 * @param string var - user input
 * @param function callback
 */
exports.validateVar = function(inputVar, callback) {
	if ( inputVar == null || inputVar.length < 1 || typeof inputVar === 'undefined' || !inputVar) {
		return false;
	} else {
		return true;
	};
};

/**
 * validate username
 * @param string username - user input: username
 * @param function callback
 */
exports.validateUsername = function(username, callback) {
	//word characters such as 0-9, A-Z, a-z, _
	//literal period
	//literal @
	//between 6 and 40 characters long
	var regex = /^[\w\.@]{6,40}$/;
	return regex.test(username);
};

/**
 * validate password
 * @param string password - user input: password
 * @param function callback
 */
exports.validatePassword = function(password, callback) {
	//word characters such as 0-9, A-Z, a-z, _
	//literal period
	//literal @
	//between 6 and 40 characters long
	var regex = /^[\w\.@]{6,40}$/;
	return regex.test(password);
};

/**
 * validate first name
 * @param string first name - user input: first name
 * @param function callback
 */
exports.validateFirstName = function(firstName, callback) {
	//word characters such as A-Z and a-z
	//between 2 and 30 characters long
	var regex = /^[a-zA-Z][a-zA-Z\-'\s]{2,30}$/;
	return regex.test(firstName);
};

/**
 * validate last name
 * @param string last name - user input: last name
 * @param function callback
 */
exports.validateLastName = function(lastName, callback) {
	//word characters such as A-Z and a-z
	//between 2 and 30 characters long
	var regex = /^[a-zA-Z][a-zA-Z\-'\s]{2,30}$/;
	return regex.test(lastName);
};

/**
 * validate US zip code
 * @param string zip code - user input: zip code
 * @param function callback
 */
exports.validateZipCode = function(zipCode, callback) {
	//number characters between 0-8
	//5 characters long
	var regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
	return regex.test(zipCode);
};
