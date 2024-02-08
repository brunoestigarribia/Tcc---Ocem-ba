module.exports= function(app){
	app.get('/entrevista', function(req,res){
		app.app.controllers.entrevista.entrevista(app,req,res);
	});
	
}