$(document).ready(function(){
	
    $("#nav-icon1").click(function(){
    $(".main-menu-mobile").toggleClass("open_menu");
});

    $('#nav-icon1').click(function(){
    $(this).toggleClass('open');
});


    $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});

  });




  
  