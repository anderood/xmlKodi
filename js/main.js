/*
        A ideia é criar uma interface q crie arquivos criação de arquivos xml,
        onde eu possa inserir os dados e o mesmo exportar-los.

        Apos a inserção dos Itens, decidir se vai adicionar um novo item
        Se nao, criar o arquivo .XML
*/
let form = document.querySelector('#form');
let nomeArquivo = document.querySelector('#inptTitleArquivo');
let tituloItem = document.querySelector('#inptTitle');
let linkItem = document.querySelector('#inptLink');
let fanartItem = document.querySelector('#inptFanart');
let thumbItem = document.querySelector('#inptThumb');
let generoItem = document.querySelector('#inptGenere');
let dataItem = document.querySelector('#inptDatadeLancamento');
let arquivoXML = [];

//
function arquivo(nome, titulo, link, fanart, thumb, genero, data) {
    
    let dadosXML = [

        id = Date.now(),
        nome,
        {
            'itens':{
                'tituloDoItem': titulo,
                'linkDoTitulo': link,
                'fanart': fanart,
                'thumb': thumb,
                'genero': genero,
                'dataDeLancamento': data
            }
        }
    ];
    
    if(arquivoXML.length == 0){ //verifica se o array esta vazio
        arquivoXML.push(dadosXML); // se estiver vazio, envia para o array
    }else{
        arquivoXML[0].push(arquivoXML[0][2]) //se nao estiver vazio, enviar os novos dados, para o novo array
    }
}

function novoItem(){

    arquivo(
        nomeArquivo.value,
        tituloItem.value,
        linkItem.value,
        fanartItem.value,
        thumbItem.value,
        generoItem.value,
        dataItem.value
    )
}

function templateArquivoXML(){

    return `
        <?xml version="1.0" encoding="utf-8"?>
            ${arquivoXML.map(a => {
                return `
                    <item>
                        <titulo>${a[3].itens.tituloDoItem}</titulo>
                        <links>${a[3].itens.tituloDoItem}</links>
                        <fanart>${a[3].itens.tituloDoItem}</fanart>
                        <thumb>${a[3].itens.tituloDoItem}</thumb>
                        <genero>${a[3].itens.tituloDoItem}</genero>
                        <data>${a[3].itens.tituloDoItem}</data>
                    </item>
                `
            })}

    
    
    `
    

}

function limpaCampos(){
    form.reset();
}
