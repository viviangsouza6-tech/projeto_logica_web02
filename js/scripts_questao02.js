//PEGANDO ELELMENTOS DO DOM 
const formDados = document.querySelector("#formulário")
const divResultados = document.querySelector ("div-dados")

//CAPTURANDO O EVENTO SUBMIT [x] FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()


    const objFormDados =new FormData (formDados)

    let n1 = objFormDados.get('largura')
    let n2 = objFormDados.get('altura')
   

    let area = largura * altura

    divResultado.innerHTML = `A área a ser pintada é de ${area.toFixed(2).replace('.',',')}m², Total de litros para pintar essa área é de ${parseFloat(area /2).toFixed(2).replace('.',',')}l`

    formDados.reset()
    
})