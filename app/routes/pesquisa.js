//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
	app.get('/pesquisa',function(req,res){
		app.app.controllers.pesquisa.pesquisa(app,req,res);
	});
}