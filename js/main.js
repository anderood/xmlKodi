

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
    console.log("Estou em SalvarXML" + itensXML.id);
    
    var templateXML = `<?xml version="1.0" encoding="UTF-8"?>
<BIBLIOTECA>
  <FILMES>
    <TITLE>${itensXML.itens[0]}</TITLE>
    <LINK>${itensXML.itens[1]}</LINK>
    <FANART>${itensXML.itens[2]}</FANART>
    <THUMBNAIL>${itensXML.itens[3]}</THUMBNAIL>
    <GENRE>${itensXML.itens[4]}</GENRE>
    <DATA>${itensXML.itens[5]}</DATA>
  </FILMES>
</BIBLIOTECA>`


    console.log(templateXML);

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
