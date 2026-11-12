const a = document.querySelector('#a')
const b = document.querySelector('#b')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let a1 = parseFloat(a.value)
    let b1 = parseFloat(b.value)

    if (isNaN(a1) || isNaN(b1)) {
        wynik.innerHTML = `Wpisz liczbę:`
    }
    else if (b1 === 0) {
        wynik.innerHTML = `a = ${a1}<br>b = ${b1}<br> Nie można dzielić przez 0.`
    }
    else {
        let dzielenie = a1 % b1

        if (dzielenie === 0) {
            wynik.innerHTML = `a = ${a1}<br>b = ${b1}<br> Liczba ${a1} jest podzielna przez ${b1}`
        } else {
            wynik.innerHTML = `a = ${a1}<br>b = ${b1}<br> Liczba ${a1} nie jest podzielna przez ${b1}`
        }
    }
})