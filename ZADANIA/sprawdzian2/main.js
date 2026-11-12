const a_wartosc = document.querySelector(`#a`)
const wynik = document.querySelector(`.wynik`)
const btn = document.querySelector(`button`)

btn.addEventListener('click', function () {

    let a = parseFloat(a_wartosc.value)
    let wynik1 = ``

    if(a % 2 !== 0 && a % 5 === 0){
        wynik1 = 'Tak'
    }else{
        wynik1 = 'Nie'
    }

    wynik.innerHTML =`
    a = ${a}<br>
    odpowiedz = ${wynik1}
    `
})