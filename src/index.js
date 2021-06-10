import apiService from './js/apiService.js';
import getRefs from './js/getRefs.js';
import photoCardTpl from './templates/photoCardTpl.hbs';
import './js/IntersectionObserver.js';
import './sass/main.scss';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch (event) {
  event.preventDefault();

  apiService.query = event.currentTarget.elements.query.value.trim();

  if (apiService.query === '') {
    return alert('Write something');
  }

  apiService.resetPage();
  apiService.fetchPhotoCards().then(hits => {
    clearGalleryContainer();
    appendPhotosMarkup(hits);
  });
}

// function onLoadMore () {
//   apiService.fetchPhotoCards().then(appendPhotosMarkup);
// }

function appendPhotosMarkup (hits) {
  refs.gallery.insertAdjacentHTML('beforeend', photoCardTpl(hits));
}

function clearGalleryContainer () {
  refs.gallery.innerHTML = '';
}

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && apiService.query !== '') {
      console.log('time to load more img' + Date.now());
      apiService.fetchPhotoCards().then(hits => {
        clearGalleryContainer();
        appendPhotosMarkup(hits);
      });
    }
  });
};

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '100px',
});

observer.observe(refs.ioLoadMore);
