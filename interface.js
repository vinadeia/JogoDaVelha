
// INTERFACE*******************************************************************

document.addEventListener('DOMContentLoaded',() =>{

let casas = document.querySelectorAll('.casa')

    casas.forEach((casa) =>{
        casa.addEventListener('click', usuarioJoga)
    })

})

function atualizaCasa(){

    let casas = document.querySelectorAll('.casa')


    casas.forEach((casa) => {
    
        let posicao = casa.id
        let simbolo = placa[posicao]

        if(simbolo != ''){
            casa.innerHTML = `<div class='${simbolo}'></div>`
    
        }else{
            casa.innerHTML = ''
        }
    })

}