import { fetchCountries } from './js/fetchCountries.js';
import { createMarkupList, createMarkup } from './js/templates.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY))

function clin() {
  refs.list.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

function onInput(e) {
  const value =e.target.value.trim()
  if (value.length < 1) clin();
  fetchCountries(value).then(countryName).catch(error)
}

function countryName(name) {
   refs.list.innerHTML = createMarkupList(name)
  if (name.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
   clin()
  }
  
  if (name.length === 1) {
    refs.countryInfo.innerHTML = createMarkup(name);
    refs.list.innerHTML = '';
  }
} 
 
function error() {
  Notify.failure('Oops, there is no country with that name');
  clin();
}
///////////////////////////////////////////////////////////










// POST	Створити новий ресурс
// GET	Отримати набір ресурсів або один ресурс
// PUT	Оновити існуючий або створити новий ресурс
// PATCH	Оновити існуючий ресурс
// DELETE	Видалити ресурс

//  Сервер - це комп'ютер зі спеціальним програмним забезпеченням. Бекенд - це програма, розташована на сервері, здатна обробити вхідні HTTP-запити і має набір готових дій на певні запити.
// API (інтерфейс прикладного програмування) - набір чітко визначених правил зв'язку між різними програмними компонентами. Інтерфейс описує, що можна попросити програму зробити і що буде в результаті.
// REST API - бекенд побудований за принципом REST. Слугує прошарком між веб-застосунком і базою даних. Має стандартний інтерфейс для звернення до ресурсів. Працює як веб-сайт, ми посилаємо HTTP-запит з клієнта на сервер, а у відповідь, замість HTML-сторінки, отримуємо дані в JSON-форматі.