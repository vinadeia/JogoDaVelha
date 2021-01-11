// iniciar variáveis

let placa = ['','','','','','','','','']
let tempJogo = 0
let simbolo = ['x','o']
let gameOver = false
let pX = 0
let pO = 0

let estadosVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function zeraPlaca(){

    tempJogo= 0
    gameOver= false
    placa = ['','','','','','','','','']
    
    atualizaCasa()


    console.log('ok', placa, gameOver)
}

function usuarioJoga(event){

    if(gameOver){
        return
    }

    const posicao = event.target.id

    if(tempJogo == 0){

        if(placa[posicao] == ''){
            placa[posicao] = simbolo[tempJogo]
        }
        
        atualizaCasa()
    
        if(verificarFinalJogo()){
            setTimeout(() => alert('acabou o jogador ' +'\u{274c}'+' venceu') , 300)
        } else {

            setTimeout(()=> cpuJoga(),300)   
    
        }

        tempJogo = 1
    }    
    
}
    
function cpuJoga(){
    let posicao
    
    if(gameOver){
        return
    }
    
    if(tempJogo == 1){
        
        do{
            posicao = Math.round(Math.random()*9)
        }while(placa[posicao] != "")
    
        placa[posicao] = simbolo[tempJogo]

        atualizaCasa()

        if (verificarFinalJogo()){
            setTimeout(() => alert('acabou o jogador ' +'\u{2b55}'+' venceu'), 300)
                                
        }
        
        tempJogo = 0
    }    
        
}

function verificarFinalJogo(){

    for (let i= 0; i< estadosVitoria.length; i++){

        let seq = estadosVitoria[i]
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (placa[pos1] == placa[pos2] &&
            placa[pos1] == placa[pos3] &&
            placa[pos1] != ''){
    
            atualizaPlacar()
            gameOver = true
            return true// ** corta aqui o jogo
        }   
        
    }
    
    return false
}

function atualizaPlacar(){
    console.log('teste', tempJogo)

    switch(tempJogo){

        case 0:
            
            pO++
            res1.innerHTML = 'venceu '+ pO
        break;
        case 1:

            pX++
            res0.innerHTML = 'venceu '+ pX
        break;
    }

}
