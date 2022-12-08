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
  
  if (name.length > 1 && name.length <= 10) refs.countryInfo.innerHTML = '';
  
  if (name.length === 1) {
    refs.countryInfo.innerHTML = createMarkup(name);
    refs.list.innerHTML = '';
  }
} 
 
function error() {
  Notify.failure('Oops, there is no country with that name');
  clin();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
// Ми повісили на інпутподію колбер фукцію і обробник події  300 мілісекунд refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY))
// Далі создаємо clin()--- де ми будемо очищати поля тобто ту розмітку яку ми створемо то при потребі видалемо 

// function onInput(e) === де наше const value буде те що ми водимо в імпут і в нас умова якшо буде менше одної букви(value.length < 1) то воно 
// постирає всю нашу  розмітку яку буде створення в майбутньому... тобто ми написали і внас вибила країна з її характеристиками якщо ми в імпуті 
// стремо то все зникне 
//  fetchCountries(value) === де (value)  це країна яку ми  водимо в їмпуті і ця функція буде  визивати метод fetch в якій поверне нам розпарсені 
// дані з країною яку ми вели в полі value

// then(countryName) поверне нам дані countryName це силка  на фукцію після виконнаня промісу тобто це успішне виконання проміса
// function countryName(name) це фукція яку ми передамо на неї силку в then ,де ми створемо розмітку refs.list.innerHTML = createMarkupList(name)
// де (name)  передасть назву нашої країни ведену в імпті === if (name.length > 10) ===name.length-це кількість країн які нам вибимо 
// якшо країн більше ніж десять то очищає  clin() розмітку і вибиває  Notify.info('Too many matches found. Please enter a more specific name.');
// if (name.length === 1) якщо одна країна  то створюєрозмітку  refs.countryInfo.innerHTML = createMarkup(name); 
// refs.countryInfo.innerHTML===це наш  <div class="country-info"></div> і туди ми кладемо нашу розмітку створену раніше createMarkup(name);

// if (name.length > 1 && name.length <= 10) refs.countryInfo.innerHTML = '';якщо країн від 2 до десяти то створить розмітку 
//  refs.list.innerHTML = createMarkupList(name) тобто другу розмітку де є флаг назва столиця кількість жителів іт .. 
// і видалит