// o documento é a forma de refarenciar os elementos de 
// html no codigo, para esse caso, estamos chamando
// a classe de "getElementById" que vai buscar o elemento pelo id
// determiado dentro do html
let nome = document.getElementById("nome");

let email = document.getElementById('email');

let telefone = document.getElementById('telefone');

let paragrafo = document.getElementById('mensagemObt')

let mensagem = document.getElementById('mensagem')

emailjs.init('NuqY8KQOt7p8GQqwW');//inicializando o emailjs com API_KEY


//innertext adiciona um texto no html atraves do js
// paragrafo.innerText = "exemplo de texto";

function verificarCampos(event){
    event.preventDefault();
    if (nome.value == '' || telefone.value == '' || email.value == '' || mensagem.value == ''){
        // alert('preencha todos os campos!');
        // paragrafo.innerText = "preencha todos os campos!!" && 
            paragrafo.innerText = "preencha todos os campos";
            paragrafo.style.color = "red";
            paragrafo.style.fontWeight = 'bold';
            paragrafo.style.textAlign = 'center';
        } else {
            (paragrafo.innerText = "todos os campos estão preenchidos");
            paragrafo.style.color = "green";
            paragrafo.style.fontWeight = 'bold';
            paragrafo.style.textAlign = 'center';

            emailjs.send('service_cqro0e5','template_avk3ovs',
                {
                    to_name: nome.value,
                    to_email: email.value,
                    to_tel: telefone.value,
                    to_mensagem: mensagem.value
                }
            );

            nome.value = '';
            email.value = '';
            telefone.value = '';
            mensagem.value = '';
        };
};