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