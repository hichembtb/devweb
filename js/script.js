let images = document.querySelectorAll('.slider img');
let btnLeft = document.querySelector('.slider-btn-left');
let btnRight = document.querySelector('.slider-btn-right');
let currentImage = 0;

function showImage(n) {
  images[currentImage].classList.remove('active');
  currentImage = (n + images.length) % images.length;
  images[currentImage].classList.add('active');
}

btnLeft.addEventListener('click', function() {
  showImage(currentImage - 1);
});

btnRight.addEventListener('click', function() {
  showImage(currentImage + 1);
});

showImage(currentImage);
