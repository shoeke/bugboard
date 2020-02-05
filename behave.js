$(document).ready(function(){

      $("#button-slide").click(function(){
        if ($("#shades").is(":visible")) {
            $("#shades").hide();
            $("#button-slide").css("transform","translate(73px,0)")
        } else if ($("#shades").is(":hidden")) {
            $("#shades").show();
            $("#button-slide").css("transform","translate(0,0)");
        }
      });
});

