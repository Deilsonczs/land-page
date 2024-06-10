document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
      const header = accordion.querySelector('.accordion-header');
      const body = accordion.querySelector('.accordion-body');

      header.addEventListener('click', () => {
          // Close all other accordions
          accordions.forEach(acc => {
              const otherBody = acc.querySelector('.accordion-body');
              if (otherBody !== body) {
                  otherBody.classList.remove('active');
              }
          });

          // Toggle the clicked accordion
          body.classList.toggle('active');
      });
  });
});
