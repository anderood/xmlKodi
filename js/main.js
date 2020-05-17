
var inputTituloArquivo = document.querySelector('#inptTitleArquivo');
var inputTitulo = document.querySelector('#inptTitle');
var inputLink = document.querySelector("#inptLink");
var inputFanart = document.querySelector("#inptFanart");
var inputThumb = document.querySelector("#inptThumb");
var inputGenero = document.querySelector("#inptGenere");
var inputData = document.querySelector("#inptDatadeLancamento");
// function criaXmlKodi(){
    
//     var doc = document.implementation.createDocument(null, "biblioteca", null);

//     var filmesElem = doc.createElement('filmes');

//     var tituloElem = doc.createElement('title');
//     var txtTitle = doc.createTextNode(inputTitulo.value)
//     tituloElem.appendChild(txtTitle);


//     var linkElem = doc.createElement('link');
//     var txtLink = doc.createTextNode(inputLink.value)
//     linkElem.appendChild(txtLink);

//     var fanartElem = doc.createElement('fanart');
//     var txtFanart = doc.createTextNode(inputFanart.value)
//     fanartElem.appendChild(txtFanart);

//     var thumbElem = doc.createElement('thumbnail');
//     var txtGenre = doc.createTextNode(inputThumb.value)
//     thumbElem.appendChild(txtGenre);

//     var genreElem = doc.createElement('genre');
//     var txtGenre = doc.createTextNode(inputGenero.value)
//     genreElem.appendChild(txtGenre);

//     var dataElem = doc.createElement('data');
//     var txtData = doc.createTextNode(inputData.value)
//     dataElem.appendChild(txtData);
    
//     filmesElem.appendChild(tituloElem);
//     filmesElem.appendChild(linkElem);
//     filmesElem.appendChild(fanartElem);
//     filmesElem.appendChild(thumbElem);
//     filmesElem.appendChild(genreElem);
//     filmesElem.appendChild(dataElem);

//     doc.documentElement.appendChild(filmesElem);
    
//     return doc;
    
//     //limpaCampos();
    
// }

function salvarXml(){
    var criarXml = document.getElementById('Salva');

    criarXml.addEventListener('click', function(event){
        event.preventDefault();

        var templateXML = `<?xml version="1.0" encoding="UTF-8"?>
<BIBLIOTECA>
  <FILMES>
    <TITLE>${inputTitulo.value}</TITLE>
    <LINK>${inputLink.value}</LINK>
    <FANART>${inputFanart.value}</FANART>
    <THUMBNAIL>${inputThumb.value}</THUMBNAIL>
    <GENRE>${inputGenero.value}</GENRE>
    <DATA>${inputData.value}</DATA>
  </FILMES>
</BIBLIOTECA>`
        
        var blob = new Blob([templateXML], {type: "text/xml"});

        //saveAs(blob, "titulo.xml");
        
        saveAs(blob, inputTituloArquivo.value,"text/plain;charset=utf-8");
    });
    
}

function validaCampos(){
    if(inputTitulo.value == ""){
        alert("preencha o campo")
    }

    if(inputLink.value == ""){
        alert("preencha o campo")
    }

    if(inputFanart.value == ""){
        alert("preencha o campo")
    }

    if(inputThumb.value == ""){
        alert("preencha o campo")
    }

    if(inputGenero.value == ""){
        alert("preencha o campo")
    }

    if(inputData.value == ""){
        alert("preencha o campo")
    }

}


function retiraEspacos(){

}

