(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;
    console.log('wat', card);
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });
  
    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  
}());


/* Smooth page transition on click */
document.getElementById('go_back').addEventListener('click', () => {
  window.location.href = 'cause.html'; // Redirect to cause.html
});


const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2
    });
});


// Floating elements function (same as before)
function createFloatingElement() {
  const elements = ['🌸', '✨', '🦋', '⭐'];
  const element = document.createElement('div');
  element.className = 'floating';
  element.textContent = elements[Math.floor(Math.random() * elements.length)];
  element.style.left = Math.random() * window.innerWidth + 'px';
  element.style.top = Math.random() * window.innerHeight + 'px';
  element.style.fontSize = (Math.random() * 20 + 10) + 'px';
  document.body.appendChild(element);

  gsap.to(element, {
      y: -500,
      duration: Math.random() * 10 + 10,
      opacity: 0,
      onComplete: () => element.remove()
  });
}

// Call the function every 1 second
setInterval(createFloatingElement, 1000);


// Changing the image for birthday card
const polaroid = document.querySelector('.polaroid .img');
const images = [
    'Images/img2.JPG',
    'Images/img3.JPG',
    'Images/img5.JPG',
    'Images/img4.JPG'
];
let currentIndex = 0;

// Smoothly change the image using GSAP
function changeImage() {
    // Fade out the current image
    gsap.to(polaroid, {
        opacity: 0,
        duration: 0.5, // Duration of fade-out
        onComplete: () => {
            // Change the image after fade-out
            currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
            polaroid.style.backgroundImage = `url('${images[currentIndex]}')`;

            // Fade in the new image
            gsap.to(polaroid, {
                opacity: 1,
                duration: 0.5 // Duration of fade-in
            });
        }
    });
}

// Change the image every 3 seconds
setInterval(changeImage, 3000);