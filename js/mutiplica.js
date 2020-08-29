
let linksProntos = [];
let inptLink = document.querySelector('#inptLink');
let inptVariavel = document.querySelector('#inptVariavel');
let inptMeio = document.querySelector('#inptMeio');
let inptFim = document.querySelector('#inptFim');
let inptVezes = document.querySelector('#inptVezes');

let btnCriarLink = document.querySelector('#btnCriarLink');
btnCriarLink.addEventListener('click', montaLink);

function montaLink(){
    event.preventDefault();
    for (let i = 1; i <= inptVezes.value; i++) {
        let extensao = '.mp4'
        if(i <= 9){
           i = '0' + i;
        }
        let linkMontado = `${inptLink.value}/${inptVariavel.value}/${inptMeio.value}/${inptFim.value+i+extensao}`
       
        linksProntos.push({'linkPronto': linkMontado});
    }
}