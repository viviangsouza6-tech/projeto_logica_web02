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

    let media = (n1 + n2 + n3) / 3

    divResultados.innerHTML = situacaoIdade
})
   