// JavaScript Document
$(function(){
  
  $("a").click(function(){
    return false;
  });

  var small = $("header").offset().top;
  $(window).scroll(function(){
    if($(window).scrollTop() > small){
      $(".hamburger").addClass("hamburger-small"),
      $(".header-inner").addClass("header-small"),
      $(".sp_nav").addClass("nav-small-fix");
    }else{
      $(".hamburger").removeClass("hamburger-small"),
      $(".header-inner").removeClass("header-small"),
      $(".sp_nav").removeClass("nav-small-fix");
    }
  });
  
  $(document).on("click",".hamburger",function(){
    $(".sp_nav").stop().slideToggle();
    $(".border").toggleClass("border-active");
    $("#bg-black").fadeIn();
    $(this).toggleClass("hamburger-active");
  });

  $(document).on("click",".hamburger-active",function(){
    $("#bg-black").fadeOut();
  });
  
  $("#bg-black").click(function(){
    $(this).fadeOut();
    $(".sp_nav").slideToggle();
    $(".border").removeClass("border-active");
  });


});