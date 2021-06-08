// файл apiService.js с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API
const API_KEY = '19320063-cda7f2d635216fb573107b42d';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export default {
  searchQuery: '',
  page: 1,

  fetchPhotoCards () {
    const url = `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    // const searchParams = new URLSearchParams({
    //   key: API_KEY,
    //   q: this.searchQuery,
    //   lang: 'en',
    //   per_page: 12,
    //   page: this.page,
    // });

    // const url = `${BASE_URL}&${searchParams}`;

    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      })
      .catch(error => console.log(error));
  },

  incrementPage () {
    this.page += 1;
  },

  resetPage () {
    this.page = 1;
  },

  // без геттера и сеттера во внешнем коде нужно будет обращаться к свойству searchQuery,
  // а не просто query
  get query () {
    return this.searchQuery;
  },

  set query (newQuery) {
    this.searchQuery = newQuery;
  },
};
