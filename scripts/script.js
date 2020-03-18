$(".two-slide-slider").slick({
    speed:1000,
    infinite: false,
    // centerMode:true,
});

$('.power-slider').slick({
    speed:1000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    dots: true,
    waitForAnimate: true,
    infinite: false
});

$('.projects-logo-slider').slick({
    slidesToShow: 3,
    slidesToScroll:1,
    speed:1000,
    autoPlay: true,
    autoplay: true,
    centerMode: true,
    focusOnSelect: true
});