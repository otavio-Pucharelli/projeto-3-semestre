//comunicação com o db
async function connect (){//aproveitando a mesma conexão para todo o sistema.
    
    if(global.connection && global.connection.state !== 'disconnected'){
        
        return global.connection;
    }

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:23242907op@localhost:3306/teste_ness");
    console.log("conectou");
    global.connection = connection;
    return connection;

}

//funções do CRED
async function inserirjogadores(jogador){

    const conn = await connect();
    const sql = 'INSERT INTO jogadores(nome,nascimento,altura) values (?,?,?);'; //não consegui entender como adiciona a foreing key junto aos dados da tabela.
    const values = [jogador.nome, jogador.nascimento, jogador.altura];
    return await conn.query(sql, values);

}

async function  selecionarjogadores(){

    const conn = await connect();
    const [rows] = await conn.query('SELECT jogadores.nome, jogadores.nascimento, jogadores.altura, posicoes.nome_posicao FROM jogadores JOIN posicoes ON posicoes.id_posicao = jogadores.id;');
    return await rows;

}

async function atualizarjogadores(id, jogador){

    const conn = await connect();
    const sql = 'UPDATE jogadores set nome=?, nascimento=?, altura=? where id=?;';
    const values = [jogador.nome, jogador.nascimento, jogador.altura, id];
    return await conn.query(sql, values);

}

async function deletarjogadores(id){

    const conn = await connect();
    const sql = 'DELETE FROM jogadores WHERE id=?;';
    return await conn.query(sql, [id]);

}

module.exports = {selecionarjogadores, inserirjogadores, atualizarjogadores, deletarjogadores}