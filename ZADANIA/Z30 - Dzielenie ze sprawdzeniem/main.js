const a1 = document.querySelector('#a')
const b1 = document.querySelector('#b')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){
    let a11 = parseInt(a1.value)
    let b11 = parseInt(b1.value)

    if (b11 == 0) {

        wynik.innerHTML='Nie można dzielić przez 0'
    } else {
        let iloraz = a11 / b11
        wynik.innerHTML = `
        a = ${a11}<br>
        b = ${b11}<br>
        iloraz = ${iloraz}<br>
        `

    }
})