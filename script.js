$(document).ready(function () {

  // Mobile menu toggle
  $('.menu-toggle').on('click', function () {
    $(this).toggleClass('active');
    $('.nav-menu').toggleClass('active');
  });

  // Close menu after click
  $('.nav-menu a').on('click', function () {
    $('.nav-menu').removeClass('active');
    $('.menu-toggle').removeClass('active');
  });

  // Simple smooth scroll
  $('a[href^="#"]').on('click', function (e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 600);
    }
  });

  // Newsletter submit demo
  $('.newsletter-form').on('submit', function (e) {
    e.preventDefault();
    const email = $(this).find('input[type="email"]').val();
    if (!email) return;
    alert('Thank you for subscribing to Artisan!');
    $(this).find('input[type="email"]').val('');
  });

  // Fade-up on scroll
  function handleFadeUp() {
    $('.fade-up').each(function () {
      const elementTop = $(this).offset().top;
      const viewportBottom = $(window).scrollTop() + $(window).height();
      if (viewportBottom > elementTop + 40) {
        $(this).addClass('show');
      }
    });
  }

  // Add fade-up class to main sections
  $('.section, .hero-inner').addClass('fade-up');

  handleFadeUp();
  $(window).on('scroll', handleFadeUp);
});
