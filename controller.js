let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confSe = document.getElementById('confSe');
    let confE = document.getElementById('confE');
    let Date = document.getElementById('nascimento').value;
    let nome = document.getElementById('nome').value;
    let tel = document.getElementById('Telefone').value;
    let cpf = document.getElementById('cpf').value;
    let cep = document.getElementById('cep').value;
    let bairro = document.getElementById('bairro').value;
    let rua = document.getElementById('rua').value;
    let number = document.getElementById('numero').value;
    let complemento = document.getElementById('complemento').value;
    let Cidade = document.getElementById('Cidade');
    let Estado = document.getElementById('Estado');

    //Próxima aula: criar o código no js para verificar se o emails e a senha combinam com suas confirmações. 
    //Verificar o respositório no Github.

if(!email || !senha || !confSe || !confE || !Date || !nome || !tel || !cpf || !cep || !bairro || !rua || !number || !complemento || !Cidade || !Estado){
    alert("Campo de preenchimento obrigatório");
}
else {
alert ("Campos preenchidos com sucesso!");
}

'use restrict'; //Modo Restrito

//Limpar formulário
const limparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Preenche campos do formulário
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}
/*
Função do tipo assíncrona para consumo de API
*/
const pesquisarCep = async() =>{

    limparFormulario();

    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if (cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

        if(
            addres.hasOwnProperty('erro'))
        {
            alert('CEP não encontrado');
        } else {
            preencherFormulario(addres);
        }
    } else {
        alert('CEP incorreto');
    }
    }



// Adiciona um evento DOM, no input CEP

document.getElementById('cep').addEventListener('focusout', pesquisarCep);
