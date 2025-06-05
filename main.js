let images = document.querySelectorAll('.image');
let link = document.querySelectorAll('[data-src]')

let options = {
    threshold: 0.6
}

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            let image = entry.target;
            image.src = image.dataset.src;
            image.classList.add('visible-img');
        } else {
            let image = entry.target;
            image.classList.remove('visible-img');
        }
    });
}, options);

images.forEach(img => observer.observe(img));

/* 
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[data-src]");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => observer.observe(img));
});
 */