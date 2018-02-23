var test2 = require('./test2');
var test3 = require('./test3');
/*
console.log(test2.message);
test2.log('some text');
console.log(test2.obj.name)
*/
var t3 = new test3('sam','limbu');
var t3b = new test3('bsam','blimbu');
console.log(t3.fullName());
console.log(t3b.fullName());
test3.name1('asfd');

var users = ['sam','ellie','bernie'];
function addUser(username, callback){
     setTimeout(function(){
          users.push(username);
          callback();
     },200);
}
function getUsers(){
     setTimeout(function(){
          console.log(users);
     },200);
}
addUser("Jake", getUsers);
