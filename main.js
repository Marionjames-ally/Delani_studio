//toggle effect on the "what we do section"//

$(document).ready(function() {
  $(".image1").click(function() {
    $("#design").toggle();
    $(".image1").hide();
  });
});

$(document).ready(function() {
  $(".image2").click(function() {
    $("#development").toggle();
    $(".image2").hide();
  });
});

$(document)
