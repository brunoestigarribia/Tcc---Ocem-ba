module.exports.analise= function(app,req,res){
	res.render('analise/analise');
}
/*module.exports.noticias_salvar= function(app, req, res){
	
	var noticia=req.body;

	req.assert('titulo', 'Título é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
	req.assert('autor', 'Autor é obrigatório').notEmpty();
	req.assert('data_noticia', 'Data é obrigatória').notEmpty();
	req.assert('noticia', 'Notícia é obrigatória').notEmpty();
	var erros= req.validationErrors();
	if(erros){
		console.log(erros);
		res.render("admin/form_add_noticia",{validacao: erros, noticia:noticia});
		return;
	}
	var connection=app.config.dbConnection();
	var noticiasModel= new app.app.models.noticiasDAO(connection);

	noticiasModel.salvarNoticias(noticia, function(error, result){
		res.redirect('/noticias');
	});
}
module.exports.noticias_atualizar= function(app, req, res){
	
	var noticia=req.body;

	req.assert('titulo', 'Título é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
	req.assert('autor', 'Autor é obrigatório').notEmpty();
	req.assert('data_noticia', 'Data é obrigatória').notEmpty();
	req.assert('noticia', 'Notícia é obrigatória').notEmpty();
	var erros= req.validationErrors();
	if(erros){
		console.log(erros);
		res.render("admin/form_add_noticia",{validacao: erros, noticia:noticia});
		return;
	}
	var connection=app.config.dbConnection();
	var noticiasModel= new app.app.models.noticiasDAO(connection);

	noticiasModel.atualizarNoticias(noticia, 
		noticiasModel.mostrarNoticia(id_noticia, function(error, result){
		res.redirect('/noticia?id_noticia=' + id_noticia);
	}));
}*/