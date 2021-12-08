/*
    Exercícios de interpretação de código:

    1)
    a) A operação de calcular se o módulo de um número dividido por 2 resulta em 0
       é usada para checar se um número é par ou não. O teste checa a paridade de um número.
    b) Para os números pares, que o resto resulta em 0.
    c) Para os números ímpares, que sobram algum valor restante da operação.


    2)
    a) O código serve para mostrar ao usuário qual o preço da fruta que ele inserir no prompt,
       e issoé feito através da checagem de casos.

    b) O preço da fruta Maçã é R$ 2.25
    c) (O preço da fruta Pêra é R$ 5.5
        O preço da fruta é 5)

    
    3) 
    a) A primeira linha pede ao usuário um número pelo prompt,
       e converte a string que retorna dele em número.

    b) No caso de 10, a mensagem no terminal será: Esse número passou no teste.
       No caso de -10 não aparecerá nada, já que ele não corresponde à condição e
       um else também não foi definido.

    c) O console que está fora da condicional retornará um erro.
       A variável mensagem foi declarada dentro do escopo da condicional sem ser 
       retornada para fora dela, logo, o console que está no escopo pai não conseguirá acessá-la.
*/

// Exercícios de escrita de código:

// 1)
const podeDirigir = Number(prompt("Qual é a sua idade?"));

    if (podeDirigir >= 18) {
        console.log("Você pode dirigir.");
    }
    else{
        console.log("Você não pode dirigir ainda.")
    };


// 2)
const turnoDeEstudo = prompt("Em qual turno você estuda? Digite M(matutino), V(vespertino) ou N(noturno)");

    if (turnoDeEstudo === "M") {
        console.log("Bom dia!");
    }
    else if (turnoDeEstudo === "V") {
        console.log("Boa tarde!");
    }
    else if (turnoDeEstudo === "N") {
        console.log("Boa noite!");
    };


// 3)
const turnoEstudos = prompt("Qual seu turno de estudos: M (matutino), V (vespertino) ou N (noturno)?");

switch(turnoEstudos) {
    case "M":
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    case "N":
        console.log("Boa noite!");
        break;
    default:
        console.log("Resposta inválida, digite novamente.");
        break;
};


// 4)
const generoDoFilme = prompt("Qual o gênero do filme?").toLowerCase();
const valorIngresso = Number(prompt("Qual é o valor do ingresso?"));

if (generoDoFilme === "fantasia" && valorIngresso < 15) {
    
    console.log("Bom filme!");
    const lanche = prompt("Qual lanche você quer? Pipoca, chocolate, batatas, ou algo mais?").toLowerCase();
       
    switch(lanche) {
            case "pipoca":
                console.log(`Aproveite a sua ${lanche}!`);
                break;
            case "chocolate":
                console.log(`Aproveite o seu ${lanche}!`);
                break;
            case "batatas":
                console.log("Aproveite as suas batatinhas!");
                break;
            default:
                console.log("Aproveite o seu lanchinho!");
                break;
        }
}
else {
    console.log("Escolha outro filme. :(")
}


// DESAFIOS:
// 1) Feito no exercício 4.