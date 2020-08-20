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
let arquivoXML = [];

let criaXML = document.querySelector('#salvarXML');
let limparCampos = document.querySelector('#limpaCampos');
let salvar = document.querySelector('#salvarDados');

criaXML.addEventListener('click', salvarXML);
limparCampos.addEventListener('click', limpaCampos);
salvar.addEventListener('click', novoItem);


//
function arquivoChannels(nome, titulo, link, fanart, thumb) {
    
    let dadosXML = 
        {
            "nomeArquivo": nome,
            'name': titulo,
            'externallink': link,
            'fanart': fanart,
            'thumb': thumb
        }
    
    arquivoXML.push(dadosXML); 
}

function arquivoItens(nome, titulo, link, fanart, thumb, info) {
    
    let dadosXML = 
        {
            "nomeArquivo": nome,
            'tituloDoItem': titulo,
            'linkdDoItem': link,
            'regex': link,
            'fanart': fanart,
            'thumb': thumb,
            'info': info
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

function templateItens(){
    return `<?xml version="1.0" encoding="utf-8"?>
    <itens> 
    ${arquivoXML.map(a => {
        return `
        <item>
            <title>${a.tituloDoItem}</title>
            <link>${a.linkdDoItem}</link>
            <regex></regex>
            <fanart>${a.fanart}</fanart>
            <thumbnail>${a.thumb}</thumbnail>
            <info></info>
        </item>`
    }).join('')}
    </itens>`
}

function templateChannels(){
    return `<?xml version="1.0" encoding="utf-8"?>
    <channels> 
    ${arquivoXML.map(a => {
        return `
        <channel>
            <name>${a.tituloDoItem}</name>
            <externallink>${a.linkdDoItem}</externallink>
            <fanart>${a.fanart}</fanart>
            <thumbnail>${a.thumb}</thumbnail>
        </channel>`
    }).join('')}
    </channels>`
}

function salvarXML(){
    
    console.log(arquivoXML[0].nomeDoItem);
    let nomeDoArquivo = arquivoXML[0].nomeDoItem;


    let template = templateChannels();
    let blob = new Blob([template], {type: "text/xml"});
    saveAs(blob, nomeDoArquivo, "text/plain;charset=utf-8");
    
}

function limpaCampos(){
    form.reset();
}
