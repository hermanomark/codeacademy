$(document).ready(() => {
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').addClass('button-active');
    $('.menu-button').animate({fontSize: '24px'}, 200);
    $('.nav-menu').removeClass('hide');
  });
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({color: '#EFEFEF', backgroundColor: '#303030'});
    $('.menu-button').animate({fontSize: '18px'}, 200);
  });
  
  $(".login-button").on("click", () => {
    $(".login-form").slideToggle();
  });
  
  $(".arrow-one").on("click", () => {
    $(".shoe-details-one").toggle();
  });
  
  $(".sizes-one").on("click", () => {
    $(".text-one").fadeIn(1000);
  });
  
  $(".arrow-two").on("click", () => {
    $(".shoe-details-two").toggle();
  });
  
  $(".sizes-two").on("click", () => {
    $(".text-two").fadeIn();
  });
  
  $(".arrow-three").on("click", () => {
    $(".shoe-details-three").toggle();
  });
  
  $(".sizes-three").on("click", () => {
    $(".text-three").fadeIn(1000);
  });
  
   $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  })
  
});