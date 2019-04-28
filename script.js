//$(document).ready(function() {
//  $("#text").append("this is so freaking cool.");
//});


$(document).on("click", function() {
    $("#text").append("this is so freaking cool.");
    setTimeout(function() { alert("Delayed Click"); }, 1000);
});
