

var inputTituloArquivo = document.querySelector('#inptTitleArquivo');
var inputTitulo = document.querySelector('#inptTitle');
var inputLink = document.querySelector("#inptLink");
var inputFanart = document.querySelector("#inptFanart");
var inputThumb = document.querySelector("#inptThumb");
var inputGenero = document.querySelector("#inptGenere");
var inputData = document.querySelector("#inptDatadeLancamento");
var itensXML = {};
var itens = [];

var salvaXML = document.querySelector('#salvarXML');
salvaXML.addEventListener('click', function(event){

    event.preventDefault();
    itensXML = {
        id: Date.now(),
        nomeArquivo: inputTituloArquivo.value,
        itens: [
            inputTitulo.value, 
            inputLink.value, 
            inputFanart.value, 
            inputThumb.value,  
            inputGenero.value, 
            inputData.value
        ]
    }

    var form = document.getElementById('form');
    form.reset();
    // var blob = new Blob([templateXML], {type: "text/xml"});
    // saveAs(blob, itensXML.nomeArquivo,"text/plain;charset=utf-8");
});

var novoItem = document.querySelector('#novoItem');
novoItem.addEventListener('click', function(event){
    event.preventDefault();
    
    var elementoXML = itensXML;
    var idx = itens.indexOf(elementoXML);

    for(var i = 0; i < 1; i++){
        
        if(idx == -1){
            itens.push(itensXML);
        }else{
            alert('Dado Repetido')    
        }
    }
    console.log(itens);
    
});

var limpaCampos = document.querySelector('#limpaCampos');
limpaCampos.addEventListener('click', function(){

    var form = document.getElementById('form');
    form.reset();
});

var novo = document.querySelector('#teste');
teste.addEventListener('click', function(event){
    event.preventDefault();
    
    //Cria o documento vazio
    var createDocument = document.implementation.createDocument('<?xml version="1.0" encoding="UTF-8"?>', "", null);
    var biblioteca = createDocument.createElement('biblioteca');
    for(var i = 0; i < itens.length; i++){
        
        
        //var nomeDocumento = createDocument.createElement('nome');
        var filmes = createDocument.createElement(`${"filmes"+i}`);
        var tituloFilme = createDocument.createElement('titulo');
        var linkFilme = createDocument.createElement('links');
        var farnatFilme = createDocument.createElement('fanart')
        var thumbFilme = createDocument.createElement('thumbnail');
        var generoFilme = createDocument.createElement('genre');
        var dataLancamentoFilme = createDocument.createElement('data');

        tituloFilme.textContent = itens[i].itens[0],
        linkFilme.textContent = itens[i].itens[1],
        farnatFilme.textContent = itens[i].itens[2],
        thumbFilme.textContent = itens[i].itens[3],
        generoFilme.textContent = itens[i].itens[4],
        dataLancamentoFilme.textContent = itens[i].itens[5]  
        filmes.appendChild(tituloFilme);
        filmes.appendChild(linkFilme);
        filmes.appendChild(farnatFilme);
        filmes.appendChild(thumbFilme);
        filmes.appendChild(generoFilme);
        filmes.appendChild(dataLancamentoFilme);
        biblioteca.appendChild(filmes);
        
    }
    console.log(biblioteca.outerHTML);
    console.log(biblioteca.innerHTML);
    
    

            
    
    
});


function preencheTemplate(){
    



}