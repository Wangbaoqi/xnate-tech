




const createObserver = (imgList) => {

  const observer = new IntersectionObserver((entites) => {

    for (const entry of entites) {
      const { target, intersectionRect, intersectionRatio, isIntersecting } = entry;
      if (isIntersecting) {
        const el = entry.target;
        const src = el.getAttribute('data-src');
        if (src) {
          el.setAttribute('src', src);
        }
        observer.unobserve(el)
      }
    }
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0
  })

  Array.from(imgList).forEach(img => {
    if (img.getAttribute('src')) return;
    observer.observe(img)
  })
}



window.addEventListener('load', () => {

  const imgList = document.querySelectorAll('img');

  console.log(imgList);

  createObserver(imgList)
})

