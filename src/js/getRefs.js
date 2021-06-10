export default function getRefs () {
  return {
    searchForm: document.querySelector('#search-form'),
    // searchQuery: document.querySelector('#search-form').elements.query.value.trim(),
    searchBtn: document.querySelector('.search-btn'),
    gallery: document.querySelector('.gallery'),
    ioLoadMore: document.querySelector('.js-after-gallery-end'),
    // loadMoreBtn: document.querySelector('.loadMoreBtn'),
  };
}
