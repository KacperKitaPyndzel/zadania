const nazwa_wartosc = document.querySelector(`#nazwa`)
const wynik = document.querySelector(`.wynik`)
const btn = document.querySelector(`button`)

btn.addEventListener(`click`, function (){
let nazwa = nazwa_wartosc.value

    if (nazwa.toLowerCase() == `grochowa` || nazwa.toLowerCase() == `grzybowa`){
        wynik.innerHTML = `Wpisales ${nazwa} lubisz ta zupe`
    }else {
        wynik.innerHTML = `Zupa ${nazwa} nie lubie tej zupy`
    }

})
