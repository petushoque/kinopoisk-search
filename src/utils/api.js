export const BASE_URL = 'https://api.kinopoisk.dev';
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
    method: 'GET',
    //mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': '*',
      //'Access-Control-Allow-Credentials': 'true',
    },
    //options: {
    //  mode: 'no-cors'
    //}
    })
    .then(res => checkResponse(res))
}