(function($){
  $(function(){

    $('.carousel.carousel-slider').carousel({fullWidth: true, padding:200},setTimeout(autoplay, 8500));
      function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 8500);
      };
        $('.carousel').carousel({duration: 50});
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  });
 
})(jQuery);

