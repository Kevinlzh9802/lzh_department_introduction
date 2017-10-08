
$(document).ready(function () {
  
  $("h3#nav_history").click ( function () {
    $('html, body').animate({  
      scrollTop: $("h3#history").offset().top  
    }, 200);  
  })
  $("h3#nav_mjworks").click ( function () {
    $('html, body').animate({  
      scrollTop: $("h3#majorworks").offset().top  
    }, 200);  
  })
  $("h3#nav_personnel").click ( function () {
    $('html, body').animate({  
      scrollTop: $("h3#personnel").offset().top  
    }, 200);  
  })
  $("h3#nav_joinus").click ( function () {
    $('html, body').animate({  
      scrollTop: $("h3#joinus").offset().top  
    }, 200);  
  })
  
  $("button#return").click ( function () {
    $('html, body').animate({  
      scrollTop: $("h1").offset().top  
    }, 200);  
  })

  
  $("ul").children("li").mouseover ( function () {
    $(this).fadeTo("fast", 0.5);
  })
  $("ul").children("li").mouseleave ( function () {
    $(this).fadeTo("fast", 1);
  })
  $("button.nearpage").mouseover ( function () {
    $(this).fadeTo("fast", 0.7);
  })
  $("button.nearpage").mouseleave ( function () {
    $(this).fadeTo("fast", 1);
  })
  
  var buttonBlankBottom = 0.5 * ($("div#container_2").width() - ($("button#previous_2").width() *3));
  $("button#return").css({
    "left":buttonBlankBottom  + "px",
  })
 
});