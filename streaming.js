
// Light Button
$(document).ready(function(){$("#lightsoff").css("height", $(document).height()).hide();$(".lightSwitcher").click(function(){$("#lightsoff").toggle();if ($("#lightsoff").is(":hidden"))$(this).html("Turn off the Lights").removeClass("turnedOff");else $(this).html("Turn on the Lights").addClass("turnedOff");});});
// Streaming
$(document).ready(function(){
$('b[name="coverxz"]').before($("#iamgex-cover").html());$("#iamgex-cover").html("");
 (function () {
  var a = $(".frame-videos");
  $(".ganti-eps").click(function () {
   a.html('<div class="--responsive"><iframe src="' + mov[parseInt($(this).data("id"))] + '" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"  ></iframe></div>')
  })
 }());
});
