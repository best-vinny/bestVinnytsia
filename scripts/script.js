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
    speed:300,
    // autoplay: true,
    centerMode: true,
    focusOnSelect: true,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    draggable: false,
    waitForAnimate: false,
    asNavFor: '.current-projects-slider',
});


$('.current-projects-slider').slick({
    slidesToShow: 1,
    arrows: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    fade: true,
});

$('.project-main-photo').slick({
    arrows: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    fade: true,
   autoplay: false
});


$('.project-photo-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed:1000,
    centerMode:true,
    asNavFor: '.project-main-photo',
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    draggable: false,
    swipe: false,
    touchMove: false,
});

