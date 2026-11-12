const a = document.querySelector('#liczba1');
const b = document.querySelector('#liczba2');
const c = document.querySelector('#liczba3');
const d = document.querySelector('#liczba4');
const wynik = document.querySelector('.wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

 let liczba_a = parseFloat(a.value)
 let liczba_b = parseFloat(b.value)
 let liczba_c = parseFloat(c.value)
 let liczba_d = parseFloat(d.value)
 let srednia = (liczba_a + liczba_b + liczba_c + liczba_d)/4

   wynik.innerHTML = `
   a = ${liczba_a}<br>
   b = ${liczba_b}<br>
   c = ${liczba_c}<br>
   d = ${liczba_d}<br>
   Średnia Liczb Wynosi: <b>${srednia}</b><br>
   `
})