

var inputTituloArquivo = document.querySelector('#inptTitleArquivo');
var inputTitulo = document.querySelector('#inptTitle');
var inputLink = document.querySelector("#inptLink");
var inputFanart = document.querySelector("#inptFanart");
var inputThumb = document.querySelector("#inptThumb");
var inputGenero = document.querySelector("#inptGenere");
var inputData = document.querySelector("#inptDatadeLancamento");

var salvarXML = document.addEventListener('click', function(event){

    event.preventDefault();

    var itensXML = {
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

    console.log(itensXML);
});

var limpaCampos = document.addEventListener('click', function(){

    var form = document.getElementById('form');
    form.reset();
});