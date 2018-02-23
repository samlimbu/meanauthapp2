var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var config = require('../config/database');

//connect to database
mongoose.connect(config.database);
//on connection
mongoose.connection.on('connected',()=>{
     console.log('Connected to databse ' + config.database);
})
//Use schema
var UserSchema = mongoose.Schema({
     name:{
          type: String
     },
     email:{
          type: String,
          required: true
     },
     username:{
          type:String,
          required: true
     },
     password:{
          type: String,
          required: true
     }

});
var User = module.exports = mongoose.model('User', UserSchema);


module.exports.getUsers =function (callback){
     User.find(callback);
}
module.exports.getUserById =function (id, callback){
     User.findById(id, callback);
}
module.exports.getUserByUsername=function(username, callback){
     var query = {username:username}
     User.findOne(query, callback);
}
module.exports.addUser = function(newUser, callback){
     bcrypt.genSalt(10, (err,salt)=>{
          bcrypt.hash(newUser.password, salt, (err, hash)=>{
               if(err){
                    throw err;
               }
               newUser.password = hash;
               newUser.save(callback);
               console.log(newUser.password);
          });
     });
}
module.exports.comparePassword = function(candidatePassword, hash, callback){
     bcrypt.compare(candidatePassword, hash, (err, isMatch)=>{
          if(err) throw err;
          callback(null, isMatch);
     });
}