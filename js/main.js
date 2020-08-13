//const { saveAs } = require("./FileSaver");

/*
        A ideia é criar uma interface q crie arquivos criação de arquivos xml,
        onde eu possa inserir os dados e o mesmo exportar-los.

        Apos a inserção dos Itens, decidir se vai adicionar um novo item
        Se nao, criar o arquivo .XML
*/

//
let form = document.querySelector('#form');
let nomeArquivo = document.querySelector('#inptTitleArquivo');
let tituloItem = document.querySelector('#inptTitle');
let linkItem = document.querySelector('#inptLink');
let fanartItem = document.querySelector('#inptFanart');
let thumbItem = document.querySelector('#inptThumb');
let generoItem = document.querySelector('#inptGenere');
let dataItem = document.querySelector('#inptDatadeLancamento');
let arquivoXML = [];

let criaXML = document.querySelector('#salvarXML');
let limparCampos = document.querySelector('#limpaCampos');
let novo = document.querySelector('#novoItem');

criaXML.addEventListener('click', salvarXML);
limparCampos.addEventListener('click', limpaCampos);
novo.addEventListener('click', novoItem);


//
function arquivo(nome, titulo, link, fanart, thumb, genero, data) {
    
    let dadosXML = 
        {
            "nomeDoItem": nome,
            'tituloDoItem': titulo,
            'linkdDoItem': link,
            'fanart': fanart,
            'thumb': thumb,
            'genero': genero,
            'dataDeLancamento': data
        }
    
    arquivoXML.push(dadosXML); // se estiver vazio, envia para o array
}

function novoItem(){
    event.preventDefault();
    arquivo(
        nomeArquivo.value,
        tituloItem.value,
        linkItem.value,
        fanartItem.value,
        thumbItem.value,
        generoItem.value,
        dataItem.value
    )
    limpaCampos();
}

function templateArquivoXML(){
    return `<?xml version="1.0" encoding="utf-8"?>
       <channels> 
        ${arquivoXML.map(a => {
            console.log(a);
            return `
            <itens>
                <titulo>${a.tituloDoItem}</titulo>
                <links>${a.linkdDoItem}</links>
                <fanart>${a.fanart}</fanart>
                <thumb>${a.thumb}</thumb>
                <genero>${a.genero}</genero>
                <data>${a.dataDeLancamento}</data>
            </itens>
            `
        }).join('')}
      </channels> 
    `
}

function salvarXML(){
    event.preventDefault();
    novoItem();
    let tabela = templateArquivoXML();
    var blob = new Blob([tabela], {type: "text/xml"});
    saveAs(blob, nomeArquivo.value, "text/plain;charset=utf-8");
    limpaCampos();
}

function limpaCampos(){
    form.reset();
}
