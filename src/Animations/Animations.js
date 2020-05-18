/** ==================================================================================================
                            fade-in animation
==================================================================================================== */

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-up');

// document.addEventListener("DOMContentLoaded", function() {

if ('IntersectionObserver' in window) {
  const appearOptions = {
    threshold: 0.3,
    // rootMargin: "0px 0px 60px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
  });
} else {
  while (faders.length > 0) {
    faders[0].classList.add('appear');
  }
  while (sliders.length > 0) {
    sliders[0].classList.add('appear');
  }
}
