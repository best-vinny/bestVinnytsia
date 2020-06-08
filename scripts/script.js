$(".two-slide-slider").slick({   //about us
    speed:1000,
    infinite: false,
    dots:true
    // centerMode:true,
});

$('.power-slider').slick({
    speed:1000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    dots: true,
    waitForAnimate: true,
    infinite: false,
    autoplay: false,//true
    autoplaySpeed: 8000
});

$('.projects-logo-slider').slick({
    slidesToShow: 3,
    slidesToScroll:1,
    speed:300,
    autoplay: false,
    autoplaySpeed: 8000,
    centerMode: true,
    focusOnSelect: true,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    draggable: false,
    // waitForAnimate: false,
    asNavFor: '.current-projects-slider',
    responsive:[
        {
            breakpoint:1080,
            settings:{
                slidesToShow: 1,
                dots: true,
                centerMode: false
            }
        }
    ]

});


$('.current-projects-slider').slick({
    speed:300,
    slidesToShow: 1,
    arrows: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    fade: true,
    autoplay: false,
    adaptiveHeight: true,

});

$('.current-project__content').slick({
    slidesToShow: 2,
    arrows: false,
    responsive:[
        {
            breakpoint:900,
            settings:{
                slidesToShow: 1,
                arrows:true,
                infinite: false,
                dots: true
            }
        }
    ]
});

$('.project-main-photo').slick({
    arrows: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    fade: true,
    // autoplay: false,
    speed:1000,
    autoplay: true,//врубити
    asNavFor:'.project-photo-nav'
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
    autoplay: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    focusOnSelect: true,
    draggable: false,
    swipe: false,
    touchMove: false,

    responsive:[
        {
            breakpoint:900,
            settings:{
                slidesToShow:5,
                 vertical: false,
                 verticalSwiping: false,
                centerPadding: 0 ,
            }
        }
    ]
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

        //click outside menu
        const mobMenu = document.querySelector(".open-menu");

        onclick =  function(event) {
            if (event.target.closest(".open-menu")) return;
            mobMenu.classList.remove("open-menu");
            $('#nav-icon1').removeClass('open');
            $('.dd-btnDvn2').hasClass('hidden')  &&  toggleMenu(2,'.languages');
            $('.dd-btnDvn1').hasClass('hidden')  &&  toggleMenu(1,'.projects');
        };
    });

    $('.dd-btnTop1,.dd-btnDvn1').click(function() {
        toggleMenu(1,'.projects');
        $('.dd-btnDvn2').hasClass('hidden')  &&  toggleMenu(2,'.languages'); //close other arrow
    });

    $('.dd-btnTop2,.dd-btnDvn2').click(function() {
        toggleMenu(2,'.languages');
        $('.dd-btnDvn1').hasClass('hidden')  &&  toggleMenu(1,'.projects');
    })

});

function toggleMenu(arrowNum, menuName){
        $(`.dd-btnTop${arrowNum}`).toggleClass('hidden');
        $(`.dd-btnDvn${arrowNum}`).toggleClass('hidden');
        $(menuName).toggleClass('close');
}

//height mobile menu
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// delete hover and add arrows for drop down menu in mobile
window.onload = goToAdaptiveChange;
function goToAdaptiveChange(){
   const width = window.outerWidth;
   width<= 900 && toMobile();
}

function toMobile(){
    $('.hover-dd').removeClass("hover-dd");
    $('.mobile-dd').removeClass('hidden');
}

(function scrollHideMenu(){
    let prevScrollPos = window.pageYOffset;
    const arrTop = document.querySelector('.arrow');
    const menu = document.querySelector('.header__top');
    window.addEventListener('scroll', ()=> {
        let currentScrollPos = window.pageYOffset;
        if ( prevScrollPos + 100 < currentScrollPos ) {
            menu.classList.add("hidden");
            $('#nav-icon1').removeClass('open');
            $('.menu').removeClass('open-menu');
            prevScrollPos = currentScrollPos;

        }
         if(prevScrollPos - 100 > currentScrollPos) {
            menu.classList.remove("hidden");

            prevScrollPos = currentScrollPos;
        }
        if(currentScrollPos > window.innerHeight ){
            arrTop.classList.remove("hidden");
        } else{
            arrTop.classList.add("hidden");
        }

    });
})();


