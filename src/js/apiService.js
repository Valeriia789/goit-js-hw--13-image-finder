// файл apiService.js с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API
const API_KEY = '19320063-cda7f2d635216fb573107b42d';

export default function fetchAPI (searchQuery, page) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`,
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
}
