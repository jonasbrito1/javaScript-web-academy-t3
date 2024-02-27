document.addEventListener('DOMContentLoaded', function () {

  const displayedImage = document.querySelector('.displayed-img');
  const thumbImgs = document.querySelectorAll('.thumb-img');
  const overlay = document.querySelector('.overlay');
  const btn = document.querySelector('.dark');

  thumbImgs.forEach(function (thumb, index) {
    
    thumb.addEventListener('click', function () {
      displayedImage.src = thumb.src;
      displayedImage.alt = thumb.alt;
    });
  });

  btn.addEventListener('click', function () {
    overlay.classList.toggle('darken');

    if (overlay.classList.contains('darken')) {
      btn.textContent = 'Lighten';
      document.body.classList.add('dark-mode');
    } else {
      btn.textContent = 'Darken';
      document.body.classList.remove('dark-mode');
    }
  });
});
