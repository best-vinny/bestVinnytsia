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
    autoplay: true,
    centerMode: true,
    focusOnSelect: true
});

$('.project-main-photo').slick({
    asNavFor: '.project-photo-nav',
    autoplay: true,
});


$('.project-photo-nav').slick({
    slidesToShow: 5,
    slidesToScroll:1,
    speed:1000,
    asNavFor: '.project-main-photo',
});