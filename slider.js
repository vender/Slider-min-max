$(document).ready(function () {
    if (Cookies.get('slider') != undefined) {
        if (Cookies.get('slider') == 0) {
            var curOptions = 0;
        } else {
            var curOptions = 1;
        }
    } else {
        var curOptions = 0;
    }
    
    var arrOptions = [
      { slidesToShow: 5, slidesToScroll: 1, dots: false, arrows: false, centerMode: true, focusOnSelect: true  },
      { slidesToShow: 1, slidesToScroll: 1, dots: false, arrows: true, centerMode: false, focusOnSelect: false } 
    ];

    var slick = $('.slider').slick({ 
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
    });
    var slicknav = $('.slider-nav').slick($.extend({
        asNavFor: '.slider',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    }, arrOptions[ curOptions ]));
    classChange();
    $('.mainslider-wrapp').click( switchOptions );
    
    function switchOptions() {
        curOptions = ( curOptions ? 0 : 1 );
        classChange();
        slicknav.slick( 'slickSetOption', arrOptions[ curOptions ], true );
        slicknav.slick( 'refresh' );
        Cookies.set('slider', curOptions, { expires: 180 });
    }
    function classChange() {
        if(curOptions == 1) {
            $('#slider-wrapp').addClass('mini');
        } else {
            $('#slider-wrapp').removeClass('mini');
        }
    }

    $('.tooltip').tooltipster({
        contentAsHTML: true,
        theme: 'tooltipster-shadow'
    });
}); 