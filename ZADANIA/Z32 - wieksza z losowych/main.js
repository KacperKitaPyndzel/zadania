const a = document.querySelector('#min')
const b = document.querySelector('#max')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){
    let min1 = parseInt(a.value)
    let max1 = parseInt(b.value)

    let p1 =Math.floor(Math.random()*(max1-min1+1)+min1)
    let p2 =Math.floor(Math.random()*(max1-min1+1)+min1)

    if (p1>p2){
        wynik.innerHTML=`
        Liczby losowane z zakresu od ${min1} do ${max1}<br>
    1 wylosowana liczba: ${p1}<br>
    2 wylosowana liczba: ${p2}<br>
    ${p1}>${p2}
    `
    } else if (p1<p2){
        wynik.innerHTML=`
           Liczby losowane z zakresu od ${min1} do ${max1}<br>
    1 wylosowana liczba: ${p1}<br>
    2 wylosowana liczba: ${p2}<br>
    ${p1}<${p2}
        `
    } else {
        wynik.innerHTML=`
             Liczby losowane z zakresu od ${min1} do ${max1}<br>
    1 wylosowana liczba: ${p1}<br>
    2 wylosowana liczba: ${p2}<br>
    ${p1}=${p2}
        `
    }




})