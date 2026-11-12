const a_wartosc = document.querySelector(`#a`)
const b_wartosc = document.querySelector(`#b`)
const wynik = document.querySelector(`.wynik`)
const btn = document.querySelector(`button`)

btn.addEventListener(`click`, function (){

    let a = parseFloat(a_wartosc.value)
    let b = parseFloat(b_wartosc.value)


    if(isNaN(a) || isNaN(b)){
        wynik.innerHTML=`Jedna z podanych wartosci nie jest liczba`
    }else {
        if( parseInt(a) == a && parseInt(b) == b) {
            if (a===b){
                wynik.innerHTML = `Obie liczby sa Rowne`
            }else if (a>b){
                wynik.innerHTML=`Liczba a jest wieksza od liczby b`
            }else {
                wynik.innerHTML=`Liczba b jest wieksza od liczby a`
            }

        }else{
            wynik.innerHTML= `Jedna liczba lub obie liczby sa rzeczywiste`
        }

    }
})