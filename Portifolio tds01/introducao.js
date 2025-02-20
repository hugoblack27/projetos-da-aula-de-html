// a função console.log() serve para enviar mensagens por meio de 
// console, esta é util para debugar o códido
// console.log("Sou uma mensagem de console");


// a funçaõ de alert ela serve para exibier uma mensagem de alerta
// ao usuario
// alert("sou uma mensgem de alerta");

// a funçaõ prompt recebe uma informação do usuario e armazena em
// uma variavel se necessario
// prompt('Qual o seu nome');

// a declaração de variavel let cria um escopo local
// let nome = 'hugo';
// a declaração de variavel var cria uma variavel de escopo global
// var idade = 18;
// a declaração de variavel const cria uma variavel de escopo local,
// porem o que o valor não pode ser alterado
// const cpf = '111.222.333-44'


let nome = prompt('Qual o seu nome?');

alert("O seu nome é " + nome);

let idade = prompt("olá, " + nome + '. Qual a sua idade?');

let aniversario = prompt('Você já fez aniversario em 2025?');

if (aniversario == "sim"){
    let nascimento = 2025 - idade;
    alert('você nasceu em ' + nascimento);
} else if ( aniversario == 'não'){
    let nascimento = 2024 - idade;
    alert('Voce nasceu em ' + nascimento);
}else{
    alert("resposta invalida tente novamente.");
}


alert('Oseu nome é ' + nome + ' e sua idade é ' + idade)