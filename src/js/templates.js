function createMarkupList(namesCountry) {
  return namesCountry
    .map(({ flags, name}) => {
      return `<li class='item-contry'>
     <img class='img' width='40' src="${flags.svg}">
        <span class=span-id>${name.official}</span></li>`;
    })
    .join('');
}

function createMarkup(namesCountry) {
  return namesCountry
    .map(({ flags, name , capital ,population, languages }) => {
      const lang = Object.values(languages)
      return `<div>
    <img height="24" src="${flags.svg}" />
    <h2 class="country-name">${name.official}</h2>
  </div>
  <p class="descr"><span>Capital</span>: ${capital}</p>
  <p class="descr"><span>Population</span>: ${population}</p>
<p class="descr"><span>Languages</span>: ${lang}</p>`;
    }).join()
}

export { createMarkupList, createMarkup };

// це в нас буде розмітка де ми створюємо фунуцію createMarkupList(namesCountry) в  яку ми будемо передавати назву країни воно поверне 
// нам обезкт яку має йя назва далі ми перебираємо т ізначення які нам треба ({ flags, name}) і вписуємо їх 