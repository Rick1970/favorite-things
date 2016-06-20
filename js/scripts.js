$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var food = $("input#fav1").val();
    var beverage = $("input#fav2").val();
    var vehicle = $("input#fav3").val();
    var movie = $("input#fav4").val();
    var combination = [food, beverage, vehicle, movie];
    var mix = [combination[1],combination[0],combination[2]];
    mix.push(combination);
    $("#out1").append(combination[0]);
    $("#out2").append(combination[1]);
    $("#out3").append(combination[2]);
    $("#out4").append(combination[3]);
    var flavors = ["choclate", "vanilla", "salted carmel", "strawberry"];
    $("#flav1").append(flavors[0]);
    $("#flav2").append(flavors[1]);
    $("#flav3").append(flavors[2]);
    $("#flav4").append(flavors[3]);
    event.preventDefault();

  });
});
