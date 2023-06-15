window.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelectorAll('.carousel img');
    let currentIndex = 0;
  
    function showImage(index) {
      carouselImages.forEach((image, i) => {
        if (i === index) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    }
  
    function rotateImages() {
      currentIndex++;
      if (currentIndex >= carouselImages.length) {
        currentIndex = 0;
      }
      showImage(currentIndex);
    }
  
    setInterval(rotateImages, 3000);
  
    const countdownElement = document.getElementById('countdown');
    const countdownDate = new Date('2023-06-19');
  
    function updateCountdown() {
      const currentDate = new Date();
      const diff = countdownDate - currentDate;
  
      if (diff <= 0) {
        countdownElement.textContent = 'Happy Birthday!';
        triggerConfetti();
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }
  
    function triggerConfetti() {
      confetti.start();
    }
  
    setInterval(updateCountdown, 1000);
  });
  