module.exports = 'Hello';
module.exports = 'world';
module.exports = {"id":"1","name":"sam"};//only latest gets eported


//exp function as a class
module.exports = function(firstName, lastName){
     this.firstName = firstName;
     this.lastName = lastName;
     this.fullName = function(){
          return this.firstName + this.lastName;
     }
}

module.exports.name1 = function(msg){
     console.log(msg);
}

