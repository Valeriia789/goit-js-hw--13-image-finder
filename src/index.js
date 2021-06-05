import apiService from './js/apiService.js';
import getRefs from './js/getRefs.js';
import photoCardTpl from './templates/photoCardTpl.hbs';
import './js/loadMoreBtn.js';
import './sass/main.scss';

const refs = getRefs();

refs.searchInput.addEventListener('keyup', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick)


function onSearch (event) {
  event.preventDefault();

  apiService.searchQuery = refs.searchInput.value.trim();

  apiService
  .fetchPhotoCards()
  .then(renderPhotoCard)
}

function onLoadMoreBtnClick() {

}

function renderPhotoCard (photo) {
  const markupCard = photoCardTpl(photo);
  refs.gallery.innerHTML = markupCard;
}

function scrollPage() {
  refs.gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}