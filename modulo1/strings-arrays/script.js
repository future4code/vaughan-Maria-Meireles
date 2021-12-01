// Exercícios de interpretação:

/*
    1)

    a) undefined;
    A letra a retornará um undefined porque a variável foi definida, mas não recebeu nenhuma declaração de valor.

    b) Null;
    Agora o valor atribuído a essa variável será "null".

    c) 11;
    Um novo valor foi atribuído à variável "array", que agora é uma lista.
    A propriedade length nos retorna o comprimento de uma lista, que nesse caso, é 11.

    d) 3;
    O console mostrará o índice no array correspondente ao número na variável i.

    e) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    O que acontece aqui é que pedimos que o índice correspondente à variável i+0 seja trocado pelo número 19.

    f) 9;
    O console vai mostrar o índice do array equivalente à variável i + 6.


    2) O output será SUBI NUM ÔNIBUS EM MIRROCOS, 27

*/

// Exercícios de escrita de código:

// 1)
const nomeUsuario = prompt("Qual é o seu nome?");
const emailUsuario = prompt("Qual é o seu e-mail?");

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`);


// 2)
const comidasFavoritas = ["Mingau de aveia", "sorvete", "Pão francês", "Hambúrguer", "Pizza"];
console.log(comidasFavoritas);
console.log("Essas são minhas comidas favoritas:")
console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

const comidaUsuario = prompt("Me diga uma de suas comidas favoritas");
comidasFavoritas[1] = comidaUsuario;
console.log(comidasFavoritas);


// 3) 
const listaDeTarefas = [];

const tarefa1 = prompt("Insira sua primeira tarefa");
const tarefa2 = prompt("Insira mais uma tarefa");
const tarefa3 = prompt("Insira uma terceira tarefa");

listaDeTarefas.push(tarefa1, tarefa2, tarefa3);
console.log(listaDeTarefas);

const i = prompt("Digite o índice da tarefa realizada: 1, 2 ou 3.");
listaDeTarefas.splice([i-1], 1);
console.log(listaDeTarefas);

// DESAFIOS:

// 1)
const frase = prompt("Digite uma frase");
const listaPalavras = frase.split(" ");
console.log(listaPalavras)


// 2)
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const iAbacaxi = frutas.indexOf("Abacaxi")
console.log(`O index de Abacaxi é: ${iAbacaxi}, e o tamanho da lista de frutas é: ${frutas.length}.`)