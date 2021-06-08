import getRefs from './getRefs.js';

const refs = getRefs();

const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target);
    }
  });
}

const options = {
  rootMargin: '100px',
  // сколько процентов таргета должно въехать в рут 
  // и только тогда регистрируй это пересечение:
  // threshold: 0.5,
}

const observer = new IntersectionObserver(callback, options);

observer.observe(refs.ioLoadMore);

// отписаться от слежения:
// observer.unobserve(refs.gallery);

// /**
// * Typical Observer's registration
// */
// const observer = new IntersectionObserver((entries) => {
//   // entries: Array of observed elements
//   entries.forEach(entry => {
//       // Here we can do something with each particular entry
//       console.log(entry);
//   });
// });

// // Now we should tell our Observer what to observe
// observer.observe(viewport);
