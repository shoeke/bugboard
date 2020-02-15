$(document).ready(function(){
/*
      $("#button-slide").click(function(){
        if ($("#shades").is(":visible")) {
            $("#shades").hide();
            $("#button-slide").css("transform","translate(73px,0)")
        } else if ($("#shades").is(":hidden")) {
            $("#shades").show();
            $("#button-slide").css("transform","translate(0,0)");
        }
      });*/

      $("#button-slide").click(function(){
        if ($("#shades").is(":visible")) {
            $("#shades").css({opacity:0});
            $("#button-slide").css("transform","translate(73px,0)")
        } else if ($("#shades").is(":hidden")) {
            $("#shades").css({opacity:1});
            $("#button-slide").css("transform","translate(0,0)");
        }
      });

      $("#box1").mouseenter(function() {
        $(".modal1").show();
      });
      $("#box1").mouseleave(function() {
        $(".modal1").hide();
      });

      $("#box2").mouseenter(function() {
        $(".modal2").show();
      });
      $("#box2").mouseleave(function() {
        $(".modal2").hide();
      });

      $("#box3").mouseenter(function() {
        $(".modal3").show();
      });
      $("#box3").mouseleave(function() {
        $(".modal3").hide();
      });

      $("#box4").mouseenter(function() {
        $(".modal4").show();
      });
      $("#box4").mouseleave(function() {
        $(".modal4").hide();
      });

      $("#box5").mouseenter(function() {
        $(".modal5").show();
      });
      $("#box5").mouseleave(function() {
        $(".modal5").hide();
      });

      $("#box6").mouseenter(function() {
        $(".modal6").show();
      });
      $("#box6").mouseleave(function() {
        $(".modal6").hide();
      });

      $("#box7").mouseenter(function() {
        $(".modal7").show();
      });
      $("#box7").mouseleave(function() {
        $(".modal7").hide();
      });

      $("#box8").mouseenter(function() {
        $(".modal8").show();
      });
      $("#box8").mouseleave(function() {
        $(".modal8").hide();
      });

      $("#box9").mouseenter(function() {
        $(".modal9").show();
      });
      $("#box9").mouseleave(function() {
        $(".modal9").hide();
      });

      $("#box10").mouseenter(function() {
        $(".modal10").show();
      });
      $("#box10").mouseleave(function() {
        $(".modal10").hide();
      });


});

