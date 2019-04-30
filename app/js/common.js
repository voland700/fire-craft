$(function() {

	// Custom JS

});

document.getElementById('menuBtn').onclick = function () {
	this.classList.toggle('opened');
	$('#navList').slideToggle('slow');
}


	$(".slider-main").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: false,
		autoplay: true,
		smartSpeed: 2000,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		addClassActive: true,
		animateOut: 'fadeOut',
		onInitialize: carouselAnimateStart,
		onTranslated: carouselAnimateUp,
		onTranslate: carouselAnimateDown
	});

	function carouselAnimateStart(event) {
		$("h3.slider-item-title").each(function () {
			$(this).addClass("animated").addClass("zoomIn").css("opacity", 1)
		});
		$(".slider-wrap-btn").each(function () {
			$(this).addClass("animated").addClass("fadeInUp")
		});
	}

	function carouselAnimateUp(event) {
		$("h3.slider-item-title").each(function () {
			$(this).addClass("animated").addClass("zoomIn").css("opacity", 1)
		});
		$(".slider-wrap-btn").each(function () {
			$(this).addClass("animated").addClass("fadeInUp").css("opacity", 1)
		});
	}

	function carouselAnimateDown(event) {
		$("h3.slider-item-title").each(function () {
			$(this).removeClass("animated").removeClass("zoomIn").css("opacity", 0)
		});
		$(".slider-wrap-btn").each(function () {
			$(this).removeClass("animated").removeClass("fadeInUp").css("opacity", 0)
		})
	}
