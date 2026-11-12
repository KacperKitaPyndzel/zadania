const a = document.querySelector('#liczba1')
const b = document.querySelector('#liczba2')
const c = document.querySelector('#liczba3')
const d = document.querySelector('#liczba4')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let liczna_a = parseFloat(a.value)
    let liczna_b = parseFloat(b.value)
    let liczna_c = parseFloat(c.value)
    let liczna_d = parseFloat(d.value)
    let srednia = (liczna_a+liczna_b+liczna_c+liczna_d)/4
    wynik.innerHTML = `
    a = ${liczna_a}<br>
    b = ${liczna_b}<br>
    c = ${liczna_c}<br>
    d = ${liczna_d}<br>
    Średnia Liczb Wynosi: <b>${srednia}</b>
    Średnia zaokrąglona do 3 miejsca po przecinku to: <b> ${srednia.toFixed(3)}</b><br>
    
    
    `

})
