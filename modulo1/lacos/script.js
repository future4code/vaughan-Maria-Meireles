/*
    Exercícios de interpretação de código:

    1) O  código da imagem faz um loop for, que vai repetir a ação
       de incrementar o valor de i à variável valor enquanto i for menor do que 5.
       O valor irá ser somado a cada volta, e o console, por estar fora do loop, só mostrará a soma final.

    2)
    a) O console irá imprimir os números que forem maiores que 18 (19, 21, 23, 25, 27, 30), 
       cada um em um console separado.
    b) O for of ínterage com os valores em cada índice, acredito que não seja possível usar ele pra acessat o índice.
       Mas existe o módulo for in, que consegue acessar os índices.

    3) *
       **
       ***
       ***
*/

// Exercícios de escrita de código:

// 1)

const quantidadeDePets = Number(prompt("Quantos Pets você tem?"));

if (quantidadeDePets === 0) {
    console.log("Que pena, você pode adotar um pet!");
}

else {
    const listaDePets = [];

    for (let i = 0; i < quantidadeDePets; i++) {
        const nomeDosPets = prompt("Qual é o nome do seu pet?");
        listaDePets.push(nomeDosPets);
    };

    console.log(listaDePets);
};

// 2)
const arrayOriginal = [10, 25, 30, 45, 50, 65];

// a)
const mostrarNumeros = (array) => {
    for (let numero of array) {
        console.log(numero);
    };
};

mostrarNumeros(arrayOriginal);

// b)
const divideNumeros = (array) => {
    for (let numero of array) {
        console.log(numero / 10);
    };
};

divideNumeros(arrayOriginal);

// c)
const selecionaNumerosPares = (array) => {
    const numerosPares = [];

    for(let numero of array) {

        if (numero % 2 === 0) {
            numerosPares.push(numero);
        };
    };
    console.log(numerosPares);
}

selecionaNumerosPares(arrayOriginal);

// d) Não consegui resolver;

// e)  Não consegui resolver.
