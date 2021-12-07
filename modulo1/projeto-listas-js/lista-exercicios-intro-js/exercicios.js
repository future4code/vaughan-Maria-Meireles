// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Insira a altura do retângulo");
  const largura = prompt("insira a largura do retângulo");

  console.log(altura * largura);

}

calculaAreaRetangulo();

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Insira o ano em que nós estamos");
  const anoNascimento = prompt("Insira seu ano de nascimento");

  console.log(anoAtual - anoNascimento);
}

imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

const meuIMC = calculaIMC(59, 1.71);
console.log(meuIMC);

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
 const nome = prompt("Insira o seu nome");
 const idade = prompt("Insira a sua idade");
 const email = prompt("Insira o seu email");

 console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

imprimeInformacoesUsuario();


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Insira uma de suas cores favoritas");
  const cor2 = prompt("Insira outra de suas cores favoritas");
  const cor3 = prompt("Insira a terceira cor que você mais gosta");

  const listaDeCores = [];
  listaDeCores.push(cor1, cor2, cor3);

  console.log(listaDeCores);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const fraseMaiuscula = string.toUpperCase();

  return fraseMaiuscula;
}

const minhaFrase = "Oi, meu nome é Eduarda.";
console.log(retornaStringEmMaiuscula(minhaFrase));

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    return custo / valorIngresso;
}

const ingressosNecessarios = calculaIngressosEspetaculo(500, 30);
console.log(ingressosNecessarios);

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const primeiraString = string1.length;
  const segundaString = string2.length;

  return primeiraString === segundaString;
}

const minhasStrings = checaStringsMesmoTamanho("Oi", "tudo bem?")


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0];
    return primeiroElemento;
}

const nomes = ["Carlos", "Augusto", "Milena", "Renata"];
const mostraPrimeiroElemento = retornaPrimeiroElemento(nomes);

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array[array.length-1];

    return ultimoElemento;
}

const idades = [30, 22, 23, 25];
const mostraUltimoElemento = retornaUltimoElemento(idades);

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroValor = array[0];
  const ultimoValor = array[array.length-1]

  array.shift();
  array.pop();
  array.unshift(ultimoValor);
  array.push(primeiroValor);

    return array;

}

const numeros = [1, 2, 3, 4];
const numerosTrocados = trocaPrimeiroEUltimo(numeros);
console.log(numerosTrocados);

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const primeiraString = string1.toUpperCase();
  const segundaString = string2.toUpperCase();

  return primeiraString === segundaString
}

checaIgualdadeDesconsiderandoCase("string1", "STRING1")

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}