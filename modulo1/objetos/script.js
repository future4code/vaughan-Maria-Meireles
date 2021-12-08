/*
    EXERCÍCIOS DE INTERPRETAÇÃO:

    1)
    a) Os consoles irão imprimir:
        Matheus Nachtergaele
        erro
        obj: {canal:"Globo, horario:"14h"}
    
    2)
    a) Os consoles irão imprimir:
        obj: cachorro = {nome: "Juca", idade: 3, raca: "SRD"}
        obj: gato = {nome: "Juba", idade: 3, raca: "SRD"}
        obj tartaruga = {nome: "Jubo", idade: 3, raca: "SRD"}

    b) A sintaxe dos três pontos representa um espalhamento (spread).
    Ele faz uma cópia do objeto original, permitindo que sejam feitas alterações, sem que o original seja afetado,
    e nos permitindo também a reutilizar informações presentes no objeto.

    3)
    a) Os consoles irão imprimir:
        false
        undefined

    b) Eu imaginei que os dois fossem dar erro, mas o primeiro retornou false,
    e o segundo undefined. Analisando melhor, eu percebi que a função passava os colchetes
    usados para acessar as propriedades de um objeto, e quando chamamos a função, passamos a propriedade entre aspas.
    Por isso o console conseguiu acessar a propriedade "backender", mas não "altura", pois ela não foi definida.
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1)
// a)
const pessoa = {
    nome: "Maria Eduarda",
    apelidos: [
        "Duda",
        "Maria",
        "Du"
    ]
}

const apelidosDaPessoa = function (objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de:
    ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`);
};

apelidosDaPessoa(pessoa);

// b)
const novosApelidos = {
    ...pessoa,
    apelidos: [
        "Eduarda",
        "Dudinha",
        "Dudu"
    ]
};

apelidosDaPessoa(novosApelidos);


// 2)

const sujeitoUm = {
    nome: "Clara",
    idade: 20,
    profissao: "Programadora"
};

const sujeitoDois = {
    nome: "Ronald",
    idade: 30,
    profissao: "Palhaço"
};

const mostraSujeitos = function(objeto) {
    const nome = objeto.nome;
    const letrasNoNome = objeto.nome.length;
    const idade = objeto.idade;
    const profissao = objeto.profissao;
    const letrasEmProfissao = objeto.profissao.length;

    return [nome, letrasNoNome, idade, profissao, letrasEmProfissao];
};

console.log(mostraSujeitos(sujeitoUm));
console.log(mostraSujeitos(sujeitoDois));


// 3)

const carrinho = [];

const fruta1 = {
    nome: "Kiwi",
    disponibilidade: true
};

const fruta2 = {
    nome: "Banana",
    disponibilidade: true
};

const fruta3 = {
    nome: "Manga",
    disponibilidade: true
};

const frutasNoSacolao = function(frutaUm, frutaDois, frutaTres) {
    carrinho.push(frutaUm);
    carrinho.push(frutaDois);
    carrinho.push(frutaTres);

    console.log(carrinho);
}

frutasNoSacolao(fruta1, fruta2, fruta3);

const disponibilidadeDasFrutas = function(fruta) {
    fruta.disponibilidade = false;
    
    return fruta;
};

console.log(disponibilidadeDasFrutas(fruta1));
console.log(disponibilidadeDasFrutas(fruta2));
console.log(disponibilidadeDasFrutas(fruta3));

// DESAFIOS: 
// 1)

const informacoesUsuario = function() {
    const nome = prompt("Qual é o seu nome?");
    const idade = Number(prompt("Qual é a sua idade?"));
    const profissao = prompt("Com o quê você trabalha?");

    const usuario = {
        nome,
        idade,
        profissao
    };

    console.log(usuario);
    console.log(typeof usuario);
};

informacoesUsuario()


// 2)

const filmeUm = {
    nome: "O poderoso chefão",
    anoDeLancamento: 1972
};

const filmeDois = {
    nome: "Scarface",
    anoDeLancamento: 1983
};

const checaLancamentoDoFilme = function(filme1, filme2) {
    const filmeChecado = filme1.anoDeLancamento <= filme2.anoDeLancamento;

    return `O primeiro filme foi lançado antes do segundo? ${filmeChecado}.`;
};

const filme = checaLancamentoDoFilme(filmeUm, filmeDois);
console.log(filme);

// O desafio 3 está inserido no exercício 3.








