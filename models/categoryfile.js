var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/categories");
mongoose.connection.on('connected',()=>{
     console.log('Connected to databse categories');
})

var Schema = mongoose.Schema;
var categorySchema = new Schema({
	"id": Number,
	"name": String
})
mongoose.model('categories', categorySchema); //table name/ collections name