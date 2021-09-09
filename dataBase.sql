create database teste_ness
default character set utf8
default collate utf8_general_ci;

use teste_ness;

create table jogadores(
	id int not null auto_increment,
    id_position int not null,
	nome varchar(30) not null,
	posição varchar(20) not null,
	nascimento date,
	altura decimal(3,2),
	primary key(id),
    foreign key(id_position) references position_(id_position)
)default charset = utf8;

create table position_(
id_position int not null auto_increment,
nome_position varchar(20) not null,
qtd_jogadores int(30) not null,
primary key(id_position)
);