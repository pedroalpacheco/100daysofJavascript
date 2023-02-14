//3 formas de declarar variaveis VAR/LET/CONST

// var é global e let é por escopo

// let nome = 'Pedro';
{
    // let nome = 'Joao';
    //Dentro do escopo
    // console.log(nome)
}

// console.log(nome);

/*DICAS DE EXERCICIOS
BLOCO DE EXERCÍCIO
o resultado deve ser:
[ 'Carlos', 'Wilb', 45 ]
*/
var nome = 'Carlos';
var sobrenome = 'Wilb'
var idade = 45;
{
  var nome = 'Carlos';
  var sobrenome = 'Indefinido'
  var idade = 26;
}
var user = [nome, sobrenome, idade]
console.log(user)