
var inputTitulo = document.querySelector('#inptTitle');
var inputLink = document.querySelector("#inptLink");
var inputFanart = document.querySelector("#inptFanart");
var inputThumb = document.querySelector("#inptThumb");
var inputGenero = document.querySelector("#inptGenere");
var inputData = document.querySelector("#inptDatadeLancamento");
function criaXmlKodi(){
    
    var doc = document.implementation.createDocument("<?xml version='1.0'?>", "", null);

    var filmesElem = doc.createElement('filmes');

    var tituloElem = doc.createElement('title');
    var txtTitle = doc.createTextNode(inputTitulo.value)
    tituloElem.appendChild(txtTitle);


    var linkElem = doc.createElement('link');
    var txtLink = doc.createTextNode(inputLink.value)
    linkElem.appendChild(txtLink);

    var fanartElem = doc.createElement('fanart');
    var txtFanart = doc.createTextNode(inputFanart.value)
    fanartElem.appendChild(txtFanart);

    var thumbElem = doc.createElement('thumbnail');
    var txtGenre = doc.createTextNode(inputThumb.value)
    thumbElem.appendChild(txtGenre);

    var genreElem = doc.createElement('genre');
    var txtGenre = doc.createTextNode(inputGenero.value)
    genreElem.appendChild(txtGenre);

    var dataElem = doc.createElement('data');
    var txtData = doc.createTextNode(inputData.value)
    dataElem.appendChild(txtData);
    
    filmesElem.appendChild(tituloElem);
    filmesElem.appendChild(linkElem);
    filmesElem.appendChild(fanartElem);
    filmesElem.appendChild(thumbElem);
    filmesElem.appendChild(genreElem);
    filmesElem.appendChild(dataElem);
    
    return filmesElem;
    
    //limpaCampos();
    
}

function salvarXml(){
    

    let estrutura = criaXmlKodi();
    console.log(estrutura);
    
    var inputTitulo = document.querySelector('#inptTitle');
    console.log("AQ " + inputTitulo.value);
    
    let blob = new Blob([inputTitulo], { type: "text/plain;charset=utf-8"});
    console.log(blob)
    saveAs(blob, inputTitulo.value + ".txt");

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

function limpaCampos(){
    
    inputTitulo.value = ""
    inputLink.value = ""
    inputFanart.value = ""
    inputThumb.value = ""
    inputGenero.value = ""
    inputData.value = ""
}