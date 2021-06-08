import apiService from './js/apiService.js';
import getRefs from './js/getRefs.js';
import photoCardTpl from './templates/photoCardTpl.hbs';
import './js/IntersectionObserver.js';
import './sass/main.scss';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch (event) {
  event.preventDefault();

  apiService.query = event.currentTarget.elements.query.value.trim();

  if (apiService.query === '') {
    return alert ('Write something')
  }

  apiService.resetPage();
  apiService.fetchPhotoCards().then(hits => {
    clearGalleryContainer();
    appendPhotosMarkup(hits);
  });
}

function onLoadMore () {
  apiService.fetchPhotoCards().then(appendPhotosMarkup);
}

function appendPhotosMarkup (hits) {
  refs.gallery.insertAdjacentHTML('beforeend', photoCardTpl(hits));
}

// function appendPhotosMarkup (hits) {
// при каждом нажатии load more на странице отображается только текущий запрос (12 картинок)
//   const markupCard = photoCardTpl(hits);
//   refs.gallery.innerHTML = markupCard;
// }

function clearGalleryContainer () {
  refs.gallery.innerHTML = '';
}
