const a_wartosc = document.querySelector(`#a`)
const wynik = document.querySelector(`.wynik`)
const btn = document.querySelector(`button`)

btn.addEventListener(`click`, function (){
    let a = parseFloat(a_wartosc.value)



    if(isNaN(a)){
        wynik.innerHTML=`Podano Złą Wartość`
    }else if(a % 4 === 0 &&(a % 100 != 0 || a % 400 === 0)){
        wynik.innerHTML =  `Rok ${a} jest przestępny`
    }else{
        wynik.innerHTML= `Rok ${a} jest nie przestępny`
    }


})