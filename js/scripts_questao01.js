//PEGANDO ELELMENTOS DO DOM 
const formDados = document.querySelector("#formulário pessoa")
const divResultados = document.querySelector ("div-dados")

//CAPTURANDO O EVENTO SUBMIT [x] FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()


    const objFormDados =new FormData (formDados)

    let n1 = objFormDados.get('num1')
    let n2 = objFormDados.get('num2')
    let n3 = objFormDados.get('num3')

    let media = parseFloat(n1 + n2 + n3) / parseFloat (3)

    divResultados.innerHTML = `A MÉDIA DOS NÚMEROS DIGITADOS É: ${media}`
    {media.toFixed(2).replace('.',',')}
    
    formDados.reset()
})
   