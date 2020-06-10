

var inputTituloArquivo = document.querySelector('#inptTitleArquivo');
var inputTitulo = document.querySelector('#inptTitle');
var inputLink = document.querySelector("#inptLink");
var inputFanart = document.querySelector("#inptFanart");
var inputThumb = document.querySelector("#inptThumb");
var inputGenero = document.querySelector("#inptGenere");
var inputData = document.querySelector("#inptDatadeLancamento");

var salvarXml = document.addEventListener('click', function(event){

    event.preventDefault();
    
    if(inputTituloArquivo.value || inputTitulo.value == ""){
        alert("Preecha os Campos")
    }
    


    var itensXML = [
        id = Date.now(),
        NomeDoArquivo = inputTituloArquivo.value,
        link = inputLink.value,
        fanart = inputFanart.value,
        thumb = inputThumb.value,
        genero = inputGenero.value, 
        data = inputData.value
    ];

    console.log(itensXML);
    

    

});

var limpaCampos = document.addEventListener('click', function(){
    inputTituloArquivo.value = ""
    inputTitulo.value = ""
    inputLink.value = ""
    inputFanart.value = ""
    inputThumb.value = ""
    inputGenero.value = ""
    inputData.value = ""
});