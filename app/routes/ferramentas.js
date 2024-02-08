module.exports= function(app){
	app.get('/ferramentas', function(req,res){
		app.app.controllers.ferramentas.ferramentas(app,req,res);
	});
}