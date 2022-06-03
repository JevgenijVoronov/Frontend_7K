/* 
    Šaja majasdarba mes izveidosiem nelilu aplikaciju kura izvadis uz ekrana izveleto siņa šķirni bildi
    Apkskatiet DogApiDemo.mp4 

    Mes izmantosim API https://dog.ceo/dog-api/

    1)  Apskatiet failu data.js tur piejami visi dati par suņu šķirnem
        Mums ir piejajams <select id='dogSelector'> kura mums nepiecišams pievienot vairakas <option value="value">name</option>
        Mes to varam izveidot ar rokam bet labak izmantot ciklu kurš izies cauri visiem datim un izveidos mums nepiecišamus elementus

        Implementacija: 
        - Izvejdosim mainigo dogSelector kura saglabasim musu <select> element var izmantot elementa id 'dogSelector' un getElementById() metodi
        - izveidosiem funkciju renderDogData(data) kura saņems siņa šķirnes datus 
        - izmantojot cilku forEach() izesiem cauri musu datiem un pieinosim musu dogSelector ar innerHTML metodi nepiecišamo html
            `<option value=${breed.value}>${breed.name}</option>`
        - izsaucam musu funkciju un rezultata mes saņemis visas iespejamas suņu šķirnes

    2)  Izmantojot addEventListener('change', funkcijaVards) notikumu pirkš dogSelector mes varam palaist funkciju kura sanems mums siņa bildi

        Implementacija:
        - pievienojam addEventListener pie dogSelector un izsaucam funkciju getDogImg
        - iz


*/



const dogSelector   = document.getElementById('dogSelector');
const dogimg        = document.getElementById('dogImg');

function renderSelectOptions(data) {
    data.forEach(breed => {
        dogSelector.innerHTML += `<option value=${breed.value}>${breed.name}</option>`
    })
} 

function renderDogData(data) {
    dogImg.innerHTML = `<img src='${data.message}'>`
}

function getDogImg() {
    const url = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`;

    fetch(url)
        .then(response => response.json())
        .then(data => renderDogData(data))
        .catch(error => alert(error));
}

renderSelectOptions(data);
dogSelector.addEventListener('change', getDogImg);
