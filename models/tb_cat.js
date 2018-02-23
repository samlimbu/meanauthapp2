const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/categories');
mongoose.connection.on('connected', ()=>{
	console.log('connected to categoriess');
})

const Schema = mongoose.Schema;
const tbcatSchema = new Schema({
	"id": Number,
	"name": String
})

mongoose.model('tb_categories', tbcatSchema); //table collections name