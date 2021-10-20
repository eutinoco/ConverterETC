const dolar = 5.54
const btn = document.getElementById('btn')
const result = document.getElementById('result')
result.className = 'javascript'
// const valor1 = document.getElementById('moedaValor1')

let valor = 0

const realDolar = (valor, dolar) => {
    let total = valor / dolar
    return total.toFixed(2)
}

btn.addEventListener('click', (evt) => {
    mostrarvalor()
    let resultado = realDolar(valor, dolar)
    console.log(evt)
    result.innerText = resultado
})

function mostrarvalor() {
    valor = document.getElementById('moedaValor1').value
    return valor
}


// console.log(realDolar(13, dolar).toFixed(2))