$(document).ready(function () {
    
    $('.tabs_button').on('click', function () {
        event.preventDefault();
        $('.tabs_item, .tabs_button').removeClass('active');
        $(this).addClass('active');
        $(this.hash).addClass('active');
    })

    $('.auto_right-plus').on('mouseenter', function () {
        $('.auto_right-popup').removeClass('active');
        $(this).siblings('.auto_right-popup').addClass('active');
    })

    $('.auto_right-popup, .auto_right').on('mouseleave', function () {
        $('.auto_right-popup').removeClass('active');
    })

    $('.cookie_close').on('click', function () {
        $('.cookie').addClass('d-none');
    })

    new WOW().init();

    $('.mobile-menu_button').on('click', function () {
        $(this).toggleClass('active');
        $('body').toggleClass('ov-hidden shadow')
        $('.header_menu').toggleClass('active');
    })

    if (window.matchMedia("(max-width: 991.90px)").matches) {
        $('.hero_right').appendTo('.hero_left');
    }

});

