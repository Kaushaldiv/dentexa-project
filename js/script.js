

  // Preloader
  $(window).on('load', function() {
    $('.preloader').fadeOut('slow');
  });

  // Hero Slider
  $(document).ready(function(){

  $('.hero-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover:false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
  });

});
  // Testimonial Carousel
  $('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // Smooth scroll for anchor links
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 500);
  });

  // Navbar active link on scroll
  $(window).on('scroll', function() {
    var scrollPos = $(window).scrollTop();
    $('.nav-link').each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr('href'));
      if (refElement.length && refElement.position().top <= scrollPos + 150 && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav-link').removeClass('active');
        currLink.addClass('active');
      }
    });
  });
