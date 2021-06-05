export default function getRefs () {
  return {
    searchInput: document.querySelector('#search-form').elements.query,
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more-btn'),
  };
}