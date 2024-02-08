module.exports= function(app){
	app.get('/conclusao', function(req,res){
		app.app.controllers.conclusao.conclusao(app,req,res);
	});
}