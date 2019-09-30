//toggle effect on the "what we do section"//

$(document).ready(function() {
  $(".design").click(function() {
    $("#design").toggle();
    $(".image1").toggle();
  });
});

$(document).ready(function() {
  $(".development").click(function() {
    $("#development").toggle();
    $(".image2").toggle();
  });
});

$(document).ready(function() {
  $(".management").click(function() {
    $("#management").toggle();
    $(".image3").toggle();
  });
});

//create a hover effect on the portfolio section showing the name of the projects//

// $(document).ready(function() {
//   $('.port').port(function() {
//     $('.work1', this).slideToggle('slow');
//   }, function(){
//   $('.work1', this).slideToggle('slow');
// });
// });

$(document).ready(function() {
    $('.work1').hover(function(){
        $('.work2', this).show();
        
	}, function(){
        $('.work2').mouseleave(); 
        $('.work2').hide();
       
    });
});