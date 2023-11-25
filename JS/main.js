$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            margin: 20,
            nav: false,
            dots: false,
            center: true,
            autoplay: true,
            responsiveClass: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 1500,
            responsive: {
              0: {
                margin: 5,
                items: 2,
              },
              739: {
                margin: 10,
                items: 2,
              },
              1024: {
                items: 2,
              },
            },
          }
    );
  });

  // Lấy chiều rộng và chiều cao của cửa sổ trình duyệt
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

console.log("Chiều rộng của cửa sổ trình duyệt: " + windowWidth + "px");
console.log("Chiều cao của cửa sổ trình duyệt: " + windowHeight + "px");
