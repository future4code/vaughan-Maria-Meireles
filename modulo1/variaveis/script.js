/*
Respostas aos exercícios:

1)  let a = 10
    let b = 10

    console.log(b)
    // 10

    b = 5

    console.log(a, b)
    // 10, 5

2)  let a = 10;
    let b = 20;
    c = a; // 10
    b = c; // 10
    a = b; // 10

    console.log(a, b, c)
    // 10, 10 10

3)  let horasPorDia = prompt("Quantas horas você trabalha por dia?")
    let recebePorDia = prompt("Quanto você recebe por dia?")

    alert(`VocÊ recebe ${recebePorDia/horasPorDia} por hora`)

*/


// 1)

let nome;
let idade;

console.log(typeof nome, typeof idade);

// Os valores foram retornados como "undefined" pois eu declarei a variável e não passei um valor para ela.


nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

console.log(typeof nome, typeof idade);
/*
    Os dois retornaram como string, apesar de o segundo valor digitado ser um número.
    Isso acontece porque todo valor inserido em um prompt retorna como string.
*/
console.log("Olá", nome, "Você tem", idade, "anos.");


// 2)
let gostaDeVermelho = "Você gosta da cor vermelha?";
let gostaDePraia = "Você gosta de praia?";
let estaFeliz = "Você se sente feliz hoje?";

let respostaVermelho = "Sim";
let respostaPraia = "Sim";
let respostaFeliz =  "Sim";

console.log(gostaDeVermelho, "-", respostaVermelho);
console.log(gostaDePraia, "-", respostaPraia);
console.log(estaFeliz, "-", respostaFeliz);


// 3)

let a = 10;
let b = 25;
let c = a;

a = b;
b = c;

 console.log("O novo valor de a é:", a)
 console.log("O novo valor de b é:", b) 


 // DESAFIO)
let stringNumero1 = prompt("Insira um número")
let numero1 = Number(stringNumero1)

let stringNumero2 = prompt("Insira mais um número")
let numero2 = Number(stringNumero2)

let x = numero1 + numero2
let y = numero1 * numero2

console.log("O primeiro número somado ao segundo resulta em:", x)
console.log("O primeiro número multiplicado pelo segundo resulta em:", y)


