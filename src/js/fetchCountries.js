export function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}










// export function fetchCountries(name)----створюємо функцію де  будемо передавати назви країни
//  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`) --воно верне нам проміс (обіцянку що поверне ) і там буде обєкт залежно від того що ти ведемо {name}
//   .then(response => { -- тутв response розпарсили дані які ми запросили
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();---- вернули проміс з розпарсиними даними в форматі json().
//   })
// }


