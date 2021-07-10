export const BASE_URL = 'https://api.kinopoisk.cloud';
/* Не более 100 запросов в день */
export const DEMO_TOKEN = '2c514ced02b254719c5c79ca04803292';

function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
}

export function searchByName(name) {
  return fetch(`${BASE_URL}/movie?search=${name}&field=name&isStrict=false&token=${DEMO_TOKEN}`, {
    headers: {
      'Content-Type': 'application/json',
    }
    })
    .then(res => checkResponse(res))
}