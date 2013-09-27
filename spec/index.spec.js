var request = require('supertest'),
	app = require('../app'),
	expect = require('expect.js');
console.log("Starting Tests");

//sometimes error don't show in the log...
//http://stackoverflow.com/questions/8794008/no-stack-trace-for-jasmine-node-errors
process.on('uncaughtException',function(e) {
	console.log("Caught unhandled exception: " + e);
	console.log(" ---> : " + e.stack);
});

//empty value 
var empty = '';

// test value (string that contains test)
var test = 'test';

// some valid usernames
var username1 = 'joeSmith',
	username2 = 'joeSmith13',
	username3 = 'joe_smith',
	username4 = 'joe@Smith',
	username5 = 'joe.Smith13';

// some invalid usernames
var username6 = 'joe',
	username7 = 'joejoejoejoejoejoejoejoejoejoejoejoejoejoe',
	username8 = '<joeSmith>',
	username9 = '$$$joeSmith$$$';

// some valid passwords
var password1 = 'password',
	password2 = 'password13',
	password3 = 'pass_word';

// some invalid passwords
var password4 = 'passwordpasswordpasswordpasswordpasswordpasswordpassword',
	password5 = '<password>';

// vaild first names
var firstname1 = 'jim',
	firstname2 = 'johnny',
	firstname3 = 'asdklsjd';

// invaild first name
var firstname4 = 'asd8dasd',
	firstname5 = '<%%%kjdksaj>';

// vaild last names
var lastname1 = 'jim',
	lastname2 = 'johnny',
	lastname3 = 'asdklsjd';

// invaild last name
var lastname4 = 'asd8dasd',
	lastname5 = '<%%%kjdksaj>';

// vaild zip codes
var zipcode1 = '12345',
	zipcode2 = '34643',
	zipcode3 = '11111';

// invaild zip codes
var zipcode4 = 'jhjkh',
	zipcode5 = '111i11';

// vaild phone numbers
var phonenumber1 = '1234532',
	phonenumber2 = '123-4545',
	phonenumber3 = '(123)123-1234';

// invaild phone numbers
var phonenumber4 = '5676hihlu',
	phonenumber5 = '123-123-12-34';

describe('POST - validate/var:', function (done) {
	it('good var', function(done) {
		request(app)
			.post('/validate/var?variable='+test)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('bad var - used empty', function(done) {
		request(app)
			.post('/validate/var?variable='+empty)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad var - didnt pass var', function(done) {
		request(app)
			.post('/validate/var')
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
});

describe('POST - validate/username:', function (done) {
	it('good username - username1', function(done) {
		request(app)
			.post('/validate/username?username='+username1)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good username - username2', function(done) {
		request(app)
			.post('/validate/username?username='+username2)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good username - username3', function(done) {
		request(app)
			.post('/validate/username?username='+username3)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good username - username4', function(done) {
		request(app)
			.post('/validate/username?username='+username4)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good username - username5', function(done) {
		request(app)
			.post('/validate/username?username='+username5)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('bad username - username6', function(done) {
		request(app)
			.post('/validate/username?username='+username6)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad username - username7', function(done) {
		request(app)
			.post('/validate/username?username='+username7)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad username - username8', function(done) {
		request(app)
			.post('/validate/username?username='+username8)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad username - username9', function(done) {
		request(app)
			.post('/validate/username?username='+username9)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad username - empty', function(done) {
		request(app)
			.post('/validate/username?username='+empty)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
});

describe('POST - validate/password:', function (done) {
	it('good password - password1', function(done) {
		request(app)
			.post('/validate/password?password='+password1)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good password - password2', function(done) {
		request(app)
			.post('/validate/password?password='+password2)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good password - password3', function(done) {
		request(app)
			.post('/validate/password?password='+password3)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('bad password - password4', function(done) {
		request(app)
			.post('/validate/password?password='+password4)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad password - password5', function(done) {
		request(app)
			.post('/validate/password?password='+password5)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad password - used empty', function(done) {
		request(app)
			.post('/validate/password?password='+empty)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
});

describe('POST - validate/firstname:', function (done) {
	it('good firstname - firstname1', function(done) {
		request(app)
			.post('/validate/firstname?firstname='+firstname1)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good firstname - firstname2', function(done) {
		request(app)
			.post('/validate/firstname?firstname='+firstname2)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good firstname - firstname3', function(done) {
		request(app)
			.post('/validate/firstname?firstname='+firstname3)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('bad firstname - firstname4', function(done) {
		request(app)
			.post('/validate/firstname?firstname='+firstname4)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad firstname - firstname5', function(done) {
		request(app)
			.post('/validate/firstname?firstname='+firstname5)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad firstname - used empty', function(done) {
		request(app)
			.post('/validate/firstname?firstname='+empty)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
});

describe('POST - validate/lastname:', function (done) {
	it('good lastname - firstname1', function(done) {
		request(app)
			.post('/validate/lastname?lastname='+lastname1)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good lastname - lastname2', function(done) {
		request(app)
			.post('/validate/lastname?lastname='+lastname2)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good lastname - lastname3', function(done) {
		request(app)
			.post('/validate/lastname?lastname='+lastname3)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('bad lastname - lastname4', function(done) {
		request(app)
			.post('/validate/lastname?lastname='+lastname4)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad lastname - lastname5', function(done) {
		request(app)
			.post('/validate/lastname?lastname='+lastname5)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad lastname - used empty', function(done) {
		request(app)
			.post('/validate/lastname?lastname='+empty)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
});

describe('POST - validate/zipcode:', function (done) {
	it('good zipcode - zipcode1', function(done) {
		request(app)
			.post('/validate/zipcode?zipcode='+zipcode1)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good zipcode - zipcode3', function(done) {
		request(app)
			.post('/validate/zipcode?zipcode='+zipcode2)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good zipcode - zipcode3', function(done) {
		request(app)
			.post('/validate/zipcode?zipcode='+zipcode3)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('bad zipcode - zipcode4', function(done) {
		request(app)
			.post('/validate/zipcode?zipcode='+zipcode4)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad zipcode - zipcode5', function(done) {
		request(app)
			.post('/validate/zipcode?zipcode='+zipcode5)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad zipcode - used empty', function(done) {
		request(app)
			.post('/validate/zipcode?zipcode='+empty)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
});

describe('POST - validate/phonenumber:', function (done) {
	it('good phonenumber - phonenumber1', function(done) {
		request(app)
			.post('/validate/phonenumber?phonenumber='+phonenumber1)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good phonenumber - phonenumber2', function(done) {
		request(app)
			.post('/validate/phonenumber?phonenumber='+phonenumber2)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('good phonenumber - phonenumber3', function(done) {
		request(app)
			.post('/validate/phonenumber?phonenumber='+phonenumber3)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(true);
				done();
			});
	});
	it('bad phonenumber - phonenumber4', function(done) {
		request(app)
			.post('/validate/phonenumber?phonenumber='+phonenumber4)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad phonenumber - phonenumber5', function(done) {
		request(app)
			.post('/validate/phonenumber?phonenumber='+phonenumber5)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
	it('bad phonenumber - used empty', function(done) {
		request(app)
			.post('/validate/phonenumber?phonenumber='+empty)
			.end( function(err, result) {
				expect(result.res.statusCode).to.be(200);
				expect(result.res.body.success).to.be(false);
				done();
			});
	});
});