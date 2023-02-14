//string - manupula texto no javascript
// const texto = 'Brendan "Eich" é um programador de computadores  americano e criador da linguagem de programação JavaScript';
/*console.log(texto);
console.log(texto.length);
console.log(texto.replace("Brendan","Joao"));
const dado = texto.split('é') 
console.log(dado)
console.log(typeof(dado))*/

const texto = '         Brendan "Eich" é um programador de computadores  americano e criador da linguagem de programação JavaScript         ';
console.log(texto);
const textoSemEspaco = texto.trim();
console.log(textoSemEspaco);

/* 
Exercicio para a pratica 
1-Crie um sistema que conta o numero de caracteres de uma string e divida todos os caracteres
2-Retire os espaçoes em branco da seguinte string:
const = '        ES6, ECMAScript 6 ou ES2015,   é simplesmente a mais nova versão do JavaScript.             '
*/