// topbar.js

$('.section').on('scrollSpy:enter', function() {
	if (typeof $(this).attr('id') != "undefined") {
		$('.top-nav a.active').removeClass('active');
		$('.top-nav a[href$="' +  $(this).attr('id') + '"]').addClass('active');
	}
});
$('.section').scrollSpy();

$(window).scroll(function() {
	var currentPosition = $(document).scrollTop();
	var startHeight = 114;
	var endHeight = 50;
	var travel = startHeight - endHeight;
	var scale = 1 - (currentPosition/startHeight);
	var endScale = (endHeight/startHeight);

	if (currentPosition < travel ) {
		$('.top-bar').css('height', startHeight - currentPosition);
		$('.title-area').css('transform', 'scale(' + scale + ', ' + scale + ')');
		$('.top-nav ul a').css({
			'line-height': startHeight - currentPosition + 'px',
			'height': startHeight - currentPosition + 'px',
		});

		return;
	}

/*
	if ($(document).scrollTop() <= 0) {
		$('.top-bar').css('height', startHeight);
		$('.title-area').css('transform', 'scale(1, 1)');
		$('.top-nav ul a').css({
			'line-height': startHeight + 'px',
			'height': startHeight + 'px',
		});
		$('.top-nav a.active').removeClass('active');
		$('.top-nav a').first().addClass('active');

		return;
	}
*/

	if (currentPosition >= endHeight) {
		$('.top-bar').css('height', endHeight);
		$('.title-area').css('transform', 'scale(' + endScale + ', ' + endScale + ')');
		$('.top-nav ul a').css({
			'line-height': endHeight + 'px',
			'height': endHeight + 'px',
		});

		return;
	}
});
