// Resolução dos exercícios: 

/*
    1:
    a) a. False;
    b) b. False;
    c) c. True.


    2:
    O console mostrará um NaN (not a mumber), porque operações aritméticas não podem ser feitas com strings.
    Ele precisaria ter convertido os inputs em números para que funcionasse.


    3: 
    Uma solução para o código dele poderia ser adicionar o conversor diretamente no prompt:

    let primeiroNumero = Number(prompt("Digite um número!"))
    let segundoNumero = Number(prompt("Digite outro número!"))

    const soma = primeiroNumero + segundoNumero
    
    console.log(soma)
*/

// Exercício 1:

const idadePessoa = Number(prompt("Qual a sua idade?"))
const idadeAmg = Number(prompt("Qual a idade do seu(a) melhor amigo(a)?"))

const comparaIdade = idadePessoa >= idadeAmg
const diferencaIdade = idadePessoa - idadeAmg

console.log("Sua idade é maior que do seu(a) melhor amigo(a)?", comparaIdade);
console.log("Vocês tem", diferencaIdade, "anos de diferença.")


// Exercício 2:

const numeroPar = Number(prompt("Insira um número par!"));
const restoDiv = numeroPar % 2;

console.log(restoDiv)
/*
O módulo de um número par dividido por outro par sempre será zero, pois dessas contas não sobram nenhum valor.
O operador de módulo é comumente usado para fazer essa checagem de se um número é par ou não.

Caso alguém insira um número ímpar, o código vai funcionar, mas retornará um valor como resto.
Por exemplo: Dividindo 11 por 2, recebemos 1 como resto. Isso acontece porque 10 é o número mais próximo de 11 que temos na tabela de 2, e dessa divisão, sobra 1.
*/


// Exercício 3:

const numero1 = Number(prompt("Insira um número."));
const numero2 = Number(prompt("Insira mais um número."));

const maiorQue = numero1 > numero2;
const igualA = numero1 === numero2;
const div1 = numero1 % numero2 === 0;
const div2 = numero2 % numero1 === 0;

console.log("O primeiro número é maior que o segundo?", maiorQue);
console.log("O primeiro número é igual ao segundo?", igualA);
console.log("O primeiro número é divisível pelo segundo?", div1);
console.log("O segundo número é divisível pelo primeiro?", div2);


// DESAFIOS:

// a)
const grausEmKelvin = (77 - 32) * (5 / 9) + 273.15;

console.log("O valor de 77°F convertido em Kelvin é:", grausEmKelvin + "K.");

// b)
const grausEmFaren = (80) * (9 / 5) + 32;

console.log("O valor de 80°C convertido em Fahrenheit é:", grausEmFaren + "°F.");

// c)
const celsiusEmFaren = (30) * (9 / 5) + 32;
const celsiusEmKelvin = (celsiusEmFaren - 32) * (5 / 9) + 273.15;

console.log("O valor de 30°C convertidos em °F e K, são respectivamente:", celsiusEmFaren + "°F, e", celsiusEmKelvin + "K.");

// d)
const inputGraus = Number(prompt("Insira um valor em graus Celsius"));
const celsiusEmFaren2 = (inputGraus) * (9 / 5) + 32;
const celsiusEmKelvin2 = (celsiusEmFaren2 - 32) * (5 / 9) + 273.15;

console.log("O valor que você inseriu convertido resulta em:", celsiusEmFaren2 + "°F, e", celsiusEmKelvin2 + "K.");

