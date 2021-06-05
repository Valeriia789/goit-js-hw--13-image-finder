import getRefs from './getRefs.js';
const refs = getRefs();

refs.loadMoreBtn.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});

refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick)

let page = 1;

function onLoadMoreBtnClick() {
  page += 1;
}