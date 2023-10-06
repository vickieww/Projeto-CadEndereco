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
