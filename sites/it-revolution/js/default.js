jQuery(document).ready(function($) {

    /*----------------------------------------------------*/
    /* Collapse navigation bar on click
     ------------------------------------------------------ */

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    /*----------------------------------------------------*/
    /* Smooth Scrolling
     ------------------------------------------------------ */

    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();
        var target = this.hash, $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100 // - 50 is some random offset
        }, 800, 'swing', function () {
            if(history.pushState){
                history.pushState(null, null, target); // adds hash symbol without jumping to it
            }else{
                window.location.hash = target;
            }
        });
    });

    /*----------------------------------------------------*/
    /* Highlight the current section in the navigation bar
     ------------------------------------------------------*/

    var sections = $("section");
    var navigation_links = $("#nav-wrap a");

    sections.waypoint({
        handler: function(direction) {

            var active_section;

            active_section = this.element.id;
            if (direction === "up") {
                active_section = $("#"+active_section).prev().attr('id');
            }

            var active_link = $('#nav-wrap a[href="#' + active_section + '"]');

            navigation_links.parent().removeClass("active");
            active_link.parent().addClass("active");
        },
        offset: '15%'
    });

});