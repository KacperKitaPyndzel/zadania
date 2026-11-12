const imie = document.querySelector('#imie');
const wynik = document.querySelector('.wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let Imie = imie.value;

    wynik.innerHTML = `
        <h1>Czesc ${Imie}!!!</h1>
        <h2>Super cię zobaczyć na naszej stronie!!!</h2>
    `;
});
