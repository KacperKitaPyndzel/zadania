const znak_wartosc = document.querySelector(`#znak`)
const wynik = document.querySelector(`.wynik`)
const btn = document.querySelector(`button`)

btn.addEventListener(`click`, function (){
    let znak = znak_wartosc.value

    if (znak == `t` || znak ==`T`){
        wynik.innerHTML = `TAK`
    }else if(znak == `n` || znak == `N`)
    {
        wynik.innerHTML = `NIE`
    }
})