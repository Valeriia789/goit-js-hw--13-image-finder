import fetchAPI from './js/apiService.js';
import getRefs from './js/getRefs.js';
import photoCardTpl from './templates/photoCardTpl.hbs';
import './js/loadMoreBtn.js';
import './sass/main.scss';

const refs = getRefs();

refs.searchInput.addEventListener('keyup', onSearch);

function onSearch (event) {
  event.preventDefault();

  const searchQuery = refs.searchInput.value.trim();

  fetchAPI(searchQuery)
    .then(appendCountriesMarkup);
}

function appendCountriesMarkup (photo) {
  renderPhotoCard(photo);
}

function renderPhotoCard (photo) {
  const markupCard = photoCardTpl(photo);
  refs.gallery.innerHTML = markupCard;
}
