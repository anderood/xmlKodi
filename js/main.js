//const { saveAs } = require("./FileSaver");

/*
        A ideia é criar uma interface q crie arquivos criação de arquivos xml,
        onde eu possa inserir os dados e o mesmo exportar-los.

        Apos a inserção dos Itens, decidir se vai adicionar um novo item
        Se nao, criar o arquivo .XML
*/

//
let form = document.querySelector('#form');
let nomeArquivo = document.querySelector('#inptNomeArquivo');

//Channels
let titleChannel = document.querySelector('#inptTitleChannel');
let externalChannel = document.querySelector('#inptExternalChannel');
let fanartChannel = document.querySelector('#inptFanartChannel');
let thumbChannel = document.querySelector('#inptThumbChannel');

//Itens
let titleItem = document.querySelector('#inptTitleItem');
let linkItem = document.querySelector('#inptLinkItem');
let regexItem = document.querySelector('#inptRegexItem');
let fanartItem = document.querySelector('#inptFanartItem');
let thumbItem = document.querySelector('#inptThumbItem');
let infoItem = document.querySelector('#inptInfoItem');


let arquivoXML = [];

let criaXML = document.querySelector('#salvarXML');
let limparCampos = document.querySelector('#limpaCampos');
let salvar = document.querySelector('#salvarDados');

criaXML.addEventListener('click', salvarXML);
limparCampos.addEventListener('click', limpaCampos);
salvar.addEventListener('click', novoItem);


//
function channelsXML(nomeChannels, tituloChannels, externalChannels, fanartChannels, thumbChannels){
    
    let dadosXML = 
        {
            "nomeChannels": nomeChannels,
            'tituloChannels': tituloChannels,
            'externalChannels': externalChannels,
            'fanartChannels': fanartChannels,
            'thumbChannels': thumbChannels,
        }
    
    arquivoXML.push(dadosXML); 
}

function itensXML(nomeItem, tituloItem, linkItem, regexItem, fanartItem, thumbItem, infoItem){
    
    let dadosXML = 
        {
            'nomeItem': nomeItem,
            'tituloItem': tituloItem,
            'linkdItem': linkItem,
            'regexItem': regexItem,
            'fanartItem': fanartItem,
            'thumbItem': thumbItem,
            'infoItem': infoItem,
        }
    
    arquivoXML.push(dadosXML); 
}

function novoItem(){
    event.preventDefault()
    arquivoChannels(
        nomeArquivo.value,
        tituloItem.value,
        linkItem.value,
        fanartItem.value,
        thumbItem.value,
    )
    limpaCampos();
}

function templateXML(){
    return `<?xml version="1.0" encoding="utf-8"?>
    <channels> 
    ${arquivoXML.map(a => {
        return `
        <channel>
            <name>${a.name}</name>
            <externallink>${a.externallink}</externallink>
            <fanart>${a.fanart}</fanart>
            <thumbnail>${a.thumb}</thumbnail>
        </channel>`
    }).join('')}
    </channels>`
}

function salvarXML(){
    
    console.log(templateXML[0].nomeArquivo);
    let nomeDoArquivo = templateXML[0].nomeArquivo;


    let template = templateXML();
    let blob = new Blob([template], {type: "text/xml"});
    saveAs(blob, nomeDoArquivo, "text/plain;charset=utf-8");
    
}

function limpaCampos(){
    form.reset();
}
