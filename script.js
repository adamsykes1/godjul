$(document).ready(function(){



  $(".menu-icon").click(function(){
    $("nav").toggleClass("nav-show");
    if( $("main").hasClass("slide") ){
      $("main").removeClass("slide");
    } else {
      $("main").addClass("slide");
    }
    $(".menu-icon span:nth-child(2)").toggleClass("menu-icon-anime");
    console.log("dafuq");
  });

});
