// JavaScript Document
$(function(){
  

  var small = $("header").offset().top;
  $(window).scroll(function(){
    if($(window).scrollTop() > small){
      $(".hamburger").addClass("hamburger-small"),
      $(".header-inner").addClass("header-small"),
      $(".header-inner h1 a").text("AmaHima");
      $(".pc_nav").css({
        opacity: "0",
        transition: ".3s"
      });
      $(".sp_nav").addClass("nav-small-fix");
    }else{
      $(".hamburger").removeClass("hamburger-small"),
      $(".header-inner").removeClass("header-small"),
      $(".header-inner h1 a").text("あまひま！");
      $(".pc_nav").css({
        opacity: "1",
        transition: ".3s"
      });
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