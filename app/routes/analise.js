module.exports= function(app){
	app.get('/analise', function(req,res){
		app.app.controllers.analise.analise(app,req,res);
	});
	/*app.post('/noticias/salvar',function(req,res){
		app.app.controllers.admin.noticias_salvar(app,req,res);
	});
	app.post('/atualizar', function(req, res){
		app.app.controllers.admin.noticias_atualizar(app,req,res);
	});*/
}