const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//config
    //template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    app.get('/cadastrar', function(req, res){

        res.render('formulario');

    });

(async () =>{
    const db = require("./db");
    console.log("iniciou");
    
    console.log('inserir jogadores');
    const result = await db.inserirjogadores({nome: "jorge", nascimento: "1995-10-30", altura: "1.80"});
    console.log(result);
    
    console.log('chamando jogadores');
    const jogadores = await db.selecionarjogadores();
    console.log(jogadores);
    
    console.log('atualizar jogadores');
    const result2 = await db.atualizarjogadores(1,{nome: "lucas", nascimento: "1998-09-02", altura: "1.60"});
    console.log(result2);

    console.log('deletar jogadores');
    const result3 = await db.deletarjogadores();
    console.log(result3);

})();
app.listen(8081, function(req, res){
    
    console.log("rodando na porta 8081");
    
});