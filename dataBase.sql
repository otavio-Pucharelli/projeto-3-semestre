create database teste_ness
default character set utf8
default collate utf8_general_ci;

use teste_ness;

create table jogadores(
	id int not null auto_increment,
    id_posicao int not null,
	-- federado varchar(50) not null, --sim ou não?
	-- clube_federado varchar(100) null,
	nome varchar(40) not null,
	email varchar(30) not null,
	cpf char(11) not null,
	nome_responsavel varchar(30) null,
	cpf_responsavel char(11) null,
	telefone_responsavel varchar(20) not null,
	nascimento date,
	--altura decimal(3,2),
	primary key(id),
    foreign key(id_posicao) references posicao_(id_posicao)
)default charset = utf8;

create table posicao_(
id_posicao int not null auto_increment,
nome_posicao varchar(20) not null,
--qtd_jogadores int(30) not null, QUal a necessidade ?
--posicao varchar(20) not null,
primary key(id_posicao)
);


--CPF

--É federado? Se sim, qual foi o seu último clube? *
--Nome do responsável: *
--Número do RG do responsável: *
--Telefone do responsável: *
--E-mail para contato: *

--peneira para jogadores entrarem no clube