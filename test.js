
var chain = require('./')
  , assert = require('assert')

var person = {
  // properties
  name_: "",
  age_: 0,
  email_: "",
  gender_: "",

  // methods
  get: function (prop) {
    return this[prop + '_'];
  },

  name: function (name) {
    this.name_ = name;
  },

  age: function (age) {
    this.age_ = age;
  },

  email: function (email) {
    this.email_ = email;
  },

  gender: function (gender) {
    this.gender_ = gender;
  }
};

chain(person)
.name("joe")
.age(23)
.email("joseph.werle@gmail.com")
.gender("male");

assert("joe" == person.get('name'));
assert(23 == person.get('age'));
assert("joseph.werle@gmail.com" == person.get('email'));
assert("male" == person.get('gender'));
