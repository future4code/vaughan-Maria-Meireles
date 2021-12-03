// Exercícios de interpretação de código:

/*
    1) 
    a) O primeiro console retornará 10, e o segundo 50.
    b) Não apareceria nada. A função seria executada, porém o resultado dela não seria mostrado em lugar algum.

    2)
    a) Essa função irá pegar o valor que for passado no parâmetro "texto",
    que nesse caso será o input do usuário, transformará todo o texto em minúsculo, e por fim
    irá checar se o texto contém os caracteres "cenoura", e retornará um valor de true ou false.

    i. true
    ii. true
    iii. false
*/

// Exercícios escrita de código:

// 1)
// a)
const quemSouEu = function() {
    console.log("Eu sou Duda, tenho 20 anos, moro em Juiz de Fora, e sou estudante.");
}

quemSouEu();


// b)
const pessoa = function(nome,idade,cidade,profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
}
console.log(pessoa("Maria", 20, "Juiz de fora", "estudante"));


2
// 2)
// a)
const soma = function(n1, n2) {
    return n1 + n2;
}

console.log(soma(4, 5));


// b)
const maiorOuMenor = function(n1, n2) {
    return n1 >= n2;
}


const numeros = maiorOuMenor(2,5);
console.log(numeros);


// c)
const parOuN = function(n1) {
    return n1 % 2 === 0;
}

const numero = parOuN(4);
console.log(numero);


// d)
const tamanhoString = function(palavra) {
    const quantidadeLetras = palavra.length;
    const emMaiusculo = palavra.toUpperCase();

    console.log(`Essa mensagem tem o tamanho de: ${quantidadeLetras},
    e a versão em maiúscula é: ${emMaiusculo}`);
}

tamanhoString("Batata");


// 3)

const fazSoma = function(n1, n2) {
    return n1 + n2;
}

const subtracao = function(n1, n2) {
    return n1 - n2;
}

const divisao = function(n1, n2) {
    return n1 / n2;
}

const multiplicacao = function(n1, n2) {
    return n1 * n2;
}

const primeiroNumero = Number(prompt("Insira um número"));
const segundoNumero = Number(prompt("Insira mais um número"));

const somou = fazSoma(primeiroNumero, segundoNumero);
const subtraiu = subtracao(primeiroNumero, segundoNumero);
const multiplicou = multiplicacao(primeiroNumero, segundoNumero);
const dividiu = divisao(primeiroNumero, segundoNumero);

console.log(`Números inseridos: ${primeiroNumero} e ${segundoNumero} \n
            Soma: ${somou} \n
            Diferença: ${subtraiu} \n
            Multiplicação: ${multiplicou} \n
            Divisão: ${dividiu}`);

// DESAFIOS:

// 1)
// a)
testandoArrow = (p1) => `Esse é o parâmetro: ${p1}`
console.log(testandoArrow("OIE!"))


// b)
arrow2 = (p1, p2) => {p1 + p2}

const testeSoma = arrow2(20, 10)
console.log(testandoArrow(testeSoma))

// Não consegui fazer o último.


