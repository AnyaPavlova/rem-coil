$(document).ready(function () {   

    var choiseLangBtn = document.querySelector('#language-btn');
    if(choiseLangBtn) {
        choiseLangBtn.addEventListener('click', openChoiseLang);

        function openChoiseLang(event) {
            this.classList.toggle('language__lang--active');
            this.parentNode.querySelector('.language__choise-block').classList.toggle('language__choise-block--active');
        }

        document.addEventListener('click', closeChoiseLang);
        function closeChoiseLang(event) {            
            if( !(event.target.closest('.language')) ) {
                choiseLangBtn.classList.remove('language__lang--active');
                choiseLangBtn.parentNode.querySelector('.language__choise-block').classList.remove('language__choise-block--active');
            }
        }
    }
    
    $('#promo-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        appendDots: $('.promo__slider-dots'),
        rows: 0,
        prevArrow: '#promo-slider-prev',
        nextArrow: '#promo-slider-next'
    });

    $('.slider-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slider-items__arrow slider-items__arrow--left" aria-label="Previous" type="button" style=""></button>',
        nextArrow: '<button class="slider-items__arrow slider-items__arrow--right" aria-label="Previous" type="button" style=""></button>',
        rows: 0,

        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

})

/*Полифилы для ie*/
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var el = this;

        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}