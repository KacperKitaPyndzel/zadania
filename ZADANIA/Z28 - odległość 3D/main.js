const x1 = document.querySelector('#x1')
const y1 = document.querySelector('#y1')
const z1 = document.querySelector('#z1')
const x2 = document.querySelector('#x2')
const y2 = document.querySelector('#y2')
const z2 = document.querySelector('#z2')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let xx1 = parseFloat(x1.value)
    let yy1 = parseFloat(y1.value)
    let zz1 = parseFloat(z1.value)
    let xx2 = parseFloat(x2.value)
    let yy2 = parseFloat(y2.value)
    let zz2 = parseFloat(z2.value)

    let d = Math.sqrt(Math.pow(xx1 - xx2, 2) + Math.pow(yy1 - yy2, 2) + Math.pow(zz1 - zz2, 2))

    wynik.innerHTML = `Odległość w 3D wynosi: ${d.toFixed(2)}<br>`
})