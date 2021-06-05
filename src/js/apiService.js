// файл apiService.js с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API
const API_KEY = '19320063-cda7f2d635216fb573107b42d';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export default {
  searchQuery: '',
  page: 1,

  fetchPhotoCards() {
    return fetch(
      `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch(error => console.log(error));
  },

  incrementPage () {
    this.page += 1;
  },

  resetPage () {
    this.page = 1;
  },
}
