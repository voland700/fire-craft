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

$(".footer-carousel").owlCarousel({
	items: 1,
	loop: true,
	nav: true,
	navText: false,
	autoplay: true,
	smartSpeed: 1000,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	addClassActive: true,
	animateOut: 'fadeOut',
	baseClass: 'footer-carousel',
	stageClass: 'footer-stage',
	stageOuterClass: 'footer-stage-outer',
	navText: ['&lsaquo;', '&rsaquo;'],
	itemClass: 'fcar-item',
	navContainerClass: 'fcar-nav',
	navClass: ['fcar-prev', 'fcar-next'],
	controlsClass: 'fcar-controls',
	dotClass: 'fcar-dot',
	dotsClass: 'fcar-dots'
});

// Кнопка вверх
$(window).scroll(function () {
	if ($(this).scrollTop() > 500) {
		if ($('#upbutton').is(':hidden')) {
			$('#upbutton').css({
				opacity: .3
			}).fadeIn('slow');
		}
	} else {
		$('#upbutton').stop(true, false).fadeOut('fast');
	}
});
$('#upbutton').click(function () {
	$('html, body').stop().animate({
		scrollTop: 0
	}, 300);
});

$('#upbutton').hover(function () {
	$('#upbutton').css({
		opacity: .8
	});
}, function () {
	$('#upbutton').css({
		opacity: .3
	});
});

$(".goods_img-link").click(function () {
	let img = $(this).attr("href");
	$("#GoodsImg").attr("src", img);
	return false;
});