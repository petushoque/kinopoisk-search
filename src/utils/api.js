export const BASE_URL = 'https://api.kinopoisk.cloud';
/* Не более 100 запросов в день */
export const DEMO_TOKEN = '52W3005-H7E4XTF-PPFJSQD-MG3JZS7';

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