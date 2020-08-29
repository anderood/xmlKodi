//const { saveAs } = require("./FileSaver");

/*
        A ideia é criar uma interface q crie arquivos criação de arquivos xml,
        onde eu possa inserir os dados e o mesmo exportar-los.

        Apos a inserção dos Itens, decidir se vai adicionar um novo item
        Se nao, criar o arquivo .XML
*/
/*
        Parte final do projeto
        Escolher a opção,
        entrar com o nome do arquivo, 
        desabilitar as opções de channels ou itens, e bloquear a opção de nome do arquivo

*/



//

let inptChannels = document.querySelector('#inptChannels');
let inptItens = document.querySelector('#inptItens');

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
function channelsXML(nomeArquivo, tituloChannels, externalChannels, fanartChannels, thumbChannels){
    
    let dadosXML = 
        {
            "nomeArquivo": nomeArquivo,
            'tituloChannels': tituloChannels,
            'externalChannels': externalChannels,
            'fanartChannels': fanartChannels,
            'thumbChannels': thumbChannels,
        }
    
    arquivoXML.push(dadosXML); 
}

function itensXML(nomeArquivo, tituloItem, linkItem, regexItem, fanartItem, thumbItem, infoItem){
    
    let dadosXML = 
        {
            'nomeArquivo': nomeArquivo,
            'tituloItem': tituloItem,
            'linkItem': linkItem,
            'regexItem': regexItem,
            'fanartItem': fanartItem,
            'thumbItem': thumbItem,
            'infoItem': infoItem,
        }
    
    arquivoXML.push(dadosXML); 
}

function novoItem(){
    event.preventDefault()

    console.log(inptChannels.checked);
    if(inptChannels.checked){

        channelsXML(
            nomeArquivo.value,
            titleChannel.value,
            externalChannel.value,
            fanartChannel.value,
            thumbChannel.value,
        )
        console.log(arquivoXML);
    }else{
        itensXML(
            nomeArquivo.value,
            titleItem.value,
            linkItem.value,
            regexItem.value,
            fanartItem.value,
            thumbItem.value,
            infoItem.value,
        )
        console.log(arquivoXML);
    }
    
    limpaCampos();
}

function templateXML(){

    if(inptChannels.checked){
        return `<?xml version="1.0" encoding="utf-8"?>
    <channels> 
    ${arquivoXML.map(arquivo => {
        return `
        <channel>
            <name>${arquivo.tituloChannels}</name>
            <externallink>${arquivo.externalChannels}</externallink>
            <fanart>${arquivo.fanartChannels}</fanart>
            <thumbnail>${arquivo.thumbChannels}</thumbnail>
        </channel>`
    }).join('')}
    </channels>`
    
    }else{
        return `<?xml version="1.0" encoding="utf-8"?>
    <itens> 
    ${arquivoXML.map(item => {
        return `
        <item>
            <title>${item.tituloItem}</title>
            <link>${item.linkItem}</link>
            <regex>${item.regexItem}</regex>
            <fanart>${item.fanartItem}</fanart>
            <thumbnail>${item.thumbItem}</thumbnail>
            <info>${item.infoItem}</info>
        </item>`
    }).join('')}
    </itens>`
    }
    
}


function salvarXML(){
    event.preventDefault()

    let nomeDoArquivo = arquivoXML[0].nomeArquivo;

    let template = templateXML();
    let blob = new Blob([template], {type: "text/xml"});
    saveAs(blob, nomeDoArquivo, "text/plain;charset=utf-8");
    
}

function limpaCampos(){
    form.reset();
}
