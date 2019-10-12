$(document).ready(function(){
    $('.slider-tracker').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.arrow-right'),
        prevArrow: $('.arrow-left')
    });
    $('#sb-trigger-1').on('click', function(){
        $('#sb-block-1').toggleClass('active')
    });
    $('#sb-trigger-2').on('click', function(){
        $('#sb-block-2').toggleClass('active')
    });
    $('#sb-trigger-3').on('click', function(){
        $('#sb-block-3').toggleClass('active')
    });
    $('#sb-trigger-4').on('click', function(){
        $('#sb-block-4').toggleClass('active')
    });
    $('#sb-trigger-5').on('click', function(){
        $('#sb-block-5').toggleClass('active')
    });
    $('#sb-trigger-6').on('click', function(){
        $('#sb-block-6').toggleClass('active')
    });
});