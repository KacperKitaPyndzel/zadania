document.querySelector('#btn').addEventListener('click', function () {
    let a = parseFloat(document.querySelector('#a').value);
    a = Math.floor(a);
    let wynik = document.querySelector('#wynik');

    if (!isNaN(a)) {
        let kwadrat = Math.pow(a, 2);
        let szescian = Math.pow(a, 3);

        wynik.innerHTML =
            a + '<sup>2</sup> to: <b>' + kwadrat + '</b><br>' +
            a + '<sup>3</sup> to: <b>' + szescian + '</b>';
    } else {
        wynik.innerHTML = 'Podaj poprawną liczbę.';
    }
});