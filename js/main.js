
function criaXmlKodi(){
    var inputTitulo = document.querySelector("inptTitle");
    var inputLink = document.querySelector("inptLink");
    var inputFanart = document.querySelector("inptFanart");
    var inputThumb = document.querySelector("inptThumb");
    var inputGenero = document.querySelector("inptGenere");
    var inputData = document.querySelector("inptDatadeLancamento");

    var doc = document.implementation.createDocument("<?xml version='1.0'?>", "", null);

    var filmesElem = doc.createElement('filmes');

    var tituloElem = doc.createElement('title');
    tituloElem.textContent = 'oi'


    var linkElem = doc.createElement('link');

    var fanartElem = doc.createElement('fanart');


    var thumbElem = doc.createElement('thumbnail');


    var genreElem = doc.createElement('genre');


    var dataElem = doc.createElement('data');



    filmesElem.append(tituloElem);
    filmesElem.append(linkElem);
    filmesElem.append(fanartElem);
    filmesElem.append(thumbElem);
    filmesElem.append(genreElem);
    filmesElem.append(dataElem);

    console.log(filmesElem);
    

}

