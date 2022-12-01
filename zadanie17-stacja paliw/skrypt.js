const   rodzaj = document.querySelector(`#rodzaj`);
const   ile = document.querySelector(`#ile`);
const   wynik = document.querySelector(`#wynik`);
const   btn = document.querySelector(`button`);
btn.addEventListener(`click`, function (){
    let rodz = parseInt(rodzaj.value);
    let il = parseInt(ile.value);
    let koszt = 0;
    if (rodz===1) koszt = il*4;
    if (rodz===2) koszt = il*3.5;
    wynik.innerHTML = `kozszt paliwa: ${koszt}zł`
})
