$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var food = $("input#fav1").val();
    var beverage = $("input#fav2").val();
    var vehicle = $("input#fav3").val();
    var movie = $("input#fav4").val();

    event.preventDefault();
    alert(food + beverage + vehicle + movie);

  });
});
