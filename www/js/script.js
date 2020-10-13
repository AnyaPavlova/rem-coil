"use strict";

$(document).ready(function () {
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
    responsive: [{
      breakpoint: 1380,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});
/*Полифилы для ie*/

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
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