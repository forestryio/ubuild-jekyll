$(document).ready(function(){
  $('.button-collapse').sideNav();
    $('.tooltipped').tooltip({delay: 50});
	$(".dropdown-button").dropdown({
      belowOrigin: true
    });
    $('.scrollspy').scrollSpy();
    $('.table-of-contents').pushpin({ top: 100 });
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	  setInterval(function() {
        $('.carousel').carousel('next');
  	  }, 5000);

  $('.parallax').parallax();
	  
  $('.modal').modal();
	
  if(window.location.search.substring(1).split("=")[0] == 'mode'){
	$('#auth_modal').modal('open');	
  }
});