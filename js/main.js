/*********************  плавный скролл    ***************/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});

/****************      scroll top     ***************/
$(window).scroll(function () {

  var wScroll = $(this).scrollTop();

  if (wScroll > 20) {
    $('.top-menu').addClass('active');
  } else {
    $('.top-menu').removeClass('active');
  };
});

/****************     popup video   *************/
jQuery('a.popup-video').YouTubePopUp();

/************    burger      *************/
$('.burger').click(function () {
  $('.burger').toggleClass('active');
  $('.main-menu').toggleClass('show');
});

$('.main-menu a').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    user_menu.classList.remove('show');
  }
});