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

const checkboxAll = document.querySelector('.all');
const checkboxVinny = document.querySelector('.vinny');
const map = document.querySelector('#map');
const checkbox1 = document.querySelector('#all');
const checkbox2 = document.querySelector('#vinny');
checkboxAll.onclick = toReplaceImg1;
checkboxVinny.onclick = toReplaceImg2;

function toReplaceImg1() {
    console.log(1,checkbox1.checked,2,checkbox2.checked);
    if(!checkbox1.checked){
        map.src = 'img/map2.jpg';
        checkboxVinny.classList.toggle('hidden');
        checkbox2.checked= false
    }
    if(checkbox1.checked){
        map.src = 'img/map1.jpg';
        checkboxVinny.classList.toggle('hidden');
    }
}

function toReplaceImg2(){
    console.log(1,checkbox1.checked,2,checkbox2.checked);
    if(!checkbox2.checked){
        map.src = 'img/map3.jpg';
    }
    if(checkbox2.checked){
        map.src = 'img/map2.jpg';
    }
}

$(document).ready(function(){
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
        $('.menu').toggleClass('open-menu');
    });
});


