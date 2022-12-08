function createMarkupList(namesCountry) {
  return namesCountry
    .map(({ flags, name}) => {
      return `<li class='item-contry'>
      <button class='button'><img height=20px src="${flags.svg}">
        <p>${name.official}</p></button></li>`;
    })
    .join('');
}

function createMarkup(namesCountry) {
  return namesCountry
    .map(({ flags, name , capital ,population, languages }) => {

      return `<div>
    <img height="24" src="${flags.svg}" />
    <h2 class="country-name">${name.official}</h2>
  </div>
  <p class="descr"><span>Capital</span>: ${capital}</p>
  <p class="descr"><span>Population</span>: ${population}</p>
  <p class="descr"><span>Languages</span>: ${languages.spa}</p>`;
    }).join()
}

export { createMarkupList, createMarkup };