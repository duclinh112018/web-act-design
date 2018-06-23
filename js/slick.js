(function(document, window, $) {
	$(document).ready(function() {
		$('.slider-slick1').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			prevArrow : '.alight .prev',
			nextArrow : '.alight .next',
		});
	});

	$(document).ready(function() {
		$('.slider-slick2, .slider-slick3').slick({
			slidesToShow: 4
		});
	});

	
	$(document).ready(function() {
		$('.slider-slick4, .slider-slick6').slick({
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			prevArrow : null,
			nextArrow : null,
			dots: false,
  			infinite: true,
			fade: true,
			cssEase: 'linear'
		});
	});

	$(document).ready(function() {
		$('.slider-slick5').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			prevArrow : null,
			nextArrow : null,
		});
	});
}) (document, window, jQuery);
