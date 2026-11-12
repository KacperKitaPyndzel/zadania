const x1 = document.querySelector('#x1')
const x2 = document.querySelector('#x2')
const x3 = document.querySelector('#x3')
const y1 = document.querySelector('#y1')
const y2 = document.querySelector('#y2')
const y3 = document.querySelector('#y3')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let x11 = parseFloat(x1.value)
    let x22 = parseFloat(x2.value)
    let x33 = parseFloat(x3.value)
    let y11 = parseFloat(y1.value)
    let y22 = parseFloat(y2.value)
    let y33 = parseFloat(y3.value)

    let d12 = Math.sqrt(Math.pow(x11 - x22, 2) + Math.pow(y11 - y22, 2))
    let d23 = Math.sqrt(Math.pow(x22 - x33, 2) + Math.pow(y22 - y33, 2))
    let d13 = Math.sqrt(Math.pow(x11 - x33, 2) + Math.pow(y11 - y33, 2))

    wynik.innerHTML = `
        Odległość między tymi punktami P1 i P2 wynosi: ${d12.toFixed(2)}<br>
        Odległość między tymi punktami P2 i P3 wynosi: ${d23.toFixed(2)}<br>
        Odległość między tymi punktami P1 i P3 wynosi: ${d13.toFixed(2)}<br>
    `
})