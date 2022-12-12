


window.addEventListener('load', () => {
  const $list = document.querySelector('.list');
  const loadMore = (num) => {
    new Promise((resolve, reject) => { 
      setTimeout(() => { 
        resolve(new Array(num).fill(10))
      }, 400)
    })
      .then((res) => { 
        const html = res.map(d => `<li>${d}</li>`);
        $list.innerHTML += html;
      })
  }

  const observer = new IntersectionObserver((entites) => {

    if (entites[0].isIntersecting) {
      loadMore(10)
    }
  })

  observer.observe(document.querySelector('.load'))
  
})