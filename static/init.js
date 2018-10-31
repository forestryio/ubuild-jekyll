$(document).ready(function(){
  $('.button-collapse').sidenav();
    $('.tooltipped').tooltip({delay: 50});
	$(".dropdown-button").dropdown({
      belowOrigin: true
    });

  $('.sidenav').sidenav();
  $('.parallax').parallax();
	  
  $('.modal').modal({
      startingTop: '50%'
  });
	
	
  if(window.location.search.substring(1).split("=")[0] == 'mode'){
	$('#auth_modal').modal('open');	
  }	
	
  $('#carousel').carousel({
      indicators: true,
      dist: 0,
      shift: 0,
      fullWidth: true,
  });
	
});


$(document).ready(function() {
    var car = $('#carouselnew').carousel({
        dist: 0,
        shift: 0,
        padding: 20,
        numVisible: 3,
        fullWidth: true,
        noWrap: true,
        onCycleTo: function($current_item, dragged) {


            if ($($current_item).hasClass('last-item-active active')) {
                $(".right.rightbutton").hide();

            } else if ($($current_item).hasClass('first-item-active active')) {
                $(".left.leftbutton").hide();

            } else {

                $(".right.rightbutton").show('');
                $(".left.leftbutton").show('');
            }

        }
    });

});


if (window.matchMedia('(max-width: 768px)').matches)
{
    
     // move Next carousel
     $('#carouselnew .moveNextCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('#carouselnew').carousel('next',1);
     });

      // move prev carousel
      $('#carouselnew .movePrevCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('#carouselnew').carousel('prev',1);
    });

}

else if (window.matchMedia('(min-width: 769px)').matches)
{
      // move Next carousel
      $('#carouselnew .moveNextCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('#carouselnew').carousel('next',3);
     });

      // move prev carousel
      $('#carouselnew .movePrevCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('#carouselnew').carousel('prev',3);
    });

}

