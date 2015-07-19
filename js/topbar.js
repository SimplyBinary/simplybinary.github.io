// topbar.js

$('.section').on('scrollSpy:enter', function() {
	if (typeof $(this).attr('id') != "undefined") {
		$('.top-nav a.active').removeClass('active');
		$('.top-nav a[href$="' +  $(this).attr('id') + '"]').addClass('active');
	}
});
$('.section').scrollSpy();

$(window).scroll(function() {
	var startHeight = 114;
	var endHeight = 50;
	var travel = startHeight - endHeight;
	var scale = 1 - $(document).scrollTop()/startHeight;
	var endScale = 1 - endHeight/startHeight;

	if ($(document).scrollTop() < travel && $(document).scrollTop() > 0) {
		$('.top-bar').css('height', startHeight - $(document).scrollTop());
		$('.title-area').css('-webkit-transform', 'scale(' + scale + ', ' + scale + ')');
		$('.top-nav ul a').css({
			'line-height': startHeight - $(document).scrollTop() + 'px',
			'height': startHeight - $(document).scrollTop() + 'px',
		});

	}

	if ($(document).scrollTop() <= 0) {
		$('.top-bar').css('height', startHeight);
		$('.title-area').css('-webkit-transform', 'scale(1, 1)');
		$('.top-nav ul a').css({
			'line-height': startHeight + 'px',
			'height': startHeight + 'px',
		});
		$('.top-nav a.active').removeClass('active');
		$('.top-nav a').first().addClass('active');
	}

	if ($(document).scrollTop() >= endHeight) {
		$('.top-bar').css('height', travel);
		$('.title-area').css('-webkit-transform', 'scale(' + endScale + ', ' + endScale + ')');
		$('.top-nav ul a').css('line-height', travel + 'px');
		$('.top-nav ul a').css({
			'line-height': travel + 'px',
			'height': travel + 'px',
		});
	}
});
