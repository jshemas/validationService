validationService
=================

A simple web service for validating user inputs such as usernames and passwords.

### Installation
You need to have Node.js(v0.10.10) running.

```
npm install
node app
```

### Tests
You have to have mocha running. To install it run...
```
npm install -g mocha
```
Then you can run the tests by running...
```
mocha spec/
```

### Usage
The return JSON should always have a status code of 200. Check the return for a ```success``` flag. 
If success is set to true, then the user's input was valid. Otherwise it will be set to false.

Example:
Trying to validate a username.

Post Call
```
http://localhost:8080/validate/username?username=myusername
```

Return JSON
```
{
  success: true
}
```

### Rules
These are defined in ```utils.js```

User Names:
 * Word characters such as 0-9, A-Z, a-z, _
 * literal period and @
 * between 6 and 40 characters long

Pass Words:
 * Word characters such as 0-9, A-Z, a-z, _
 * literal period and @
 * between 6 and 40 characters long

First Names:
 * Word characters such as A-Z, a-z
 * between 2 and 30 characters long

Last Names:
 * Word characters such as A-Z, a-z
 * between 2 and 30 characters long

US Zip Codes:
 * Number characters such as 0-9
 * 5 characters long

US Phone Numbers:
 * Word characters such as 0-9
 * between 7 and 10 characters long

### TODO

-Add More Validation Rules (Like email and website)
