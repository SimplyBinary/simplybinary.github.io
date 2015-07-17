// topbar.js

$('.section').on('scrollSpy:enter', function() {
	if (typeof $(this).attr('id') != "undefined") {
		$('.top-nav a.active').removeClass('active');
		$('.top-nav a[href$="' +  $(this).attr('id') + '"]').addClass('active');
	}
});
$('.section').scrollSpy();

$(window).scroll(function() {
	if ($(document).scrollTop() > 0) {
		if (!$('.top-bar').hasClass('condensed')) {
			$('.top-bar').addClass('condensed');
			$('body').addClass('condensed-top-bar');
		}
	} else {
		$('.top-bar').removeClass('condensed');
		$('body').removeClass('condensed-top-bar');
		$('.top-nav a.active').removeClass('active');
		$('.top-nav a').first().addClass('active');
	}
});
