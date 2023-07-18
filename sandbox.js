
//  script to handle accordion  accordion behavior on mobile
document.addEventListener('DOMContentLoaded', function() {
  var accordionButtons = document.querySelectorAll('.accordion-button');
  if (window.innerWidth <= 768) {
    accordionButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var content = this.nextElementSibling;
        content.classList.toggle('active');
      });
    });
  }
});


//for image

function changeImage(imagePath) {
    var image = document.getElementById("content");
    image.src = imagePath;
   console.log('clicked')
  }



// carousel and carousel dots elements
const carousel = document.querySelector('.carousel');
const dotsContainer = document.querySelector('.carousel-dots');

// dots based on the number of carousel imgs
const images = carousel.querySelectorAll('img');
for (let i = 0; i < images.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('carousel-dot');
  dot.addEventListener('click', () => {
    setActiveDot(i);
    scrollToImage(i);
  });
  dotsContainer.appendChild(dot);
}

// Helper functions
function setActiveDot(index) {
  const dots = dotsContainer.querySelectorAll('.carousel-dot');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function scrollToImage(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Set the initial active dot to the first image
setActiveDot(0);
