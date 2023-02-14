//var/let/const

//ES6 2015
/* const nome = 'Ana';
nome = 'Luana';

console.log(nome)*/

/*Exercicio para a pratica - corrija o erro
RESULTADO DEVE SER [ '\nAUTOMOVEL:Amarok,\nPREÇO:240.000,\nMODELO:4\n' ]
*/
const carro = 'Amarok';
const valor;
valor = '240.000'
const tanque = '60';
const tork = '4';
console.log([`
AUTOMOVEL:${carro},
PREÇO:${valor},
MODELO:${tork}
`])