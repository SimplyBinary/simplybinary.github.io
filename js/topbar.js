// topbar.js

$('.top-nav a[href$="#"]').addClass('active');

$('div[id]').each(function(index) {
	var position = $(this).position();
	var id = $(this).attr('id');
	var offset = ($(window).height() / 1.6);
	$(this).scrollspy({
		min: position.top - offset,
		max: (position.top + $(this).height()) - offset,
		onEnter: function(element, position) {
			$('.top-nav a.active').removeClass('active');
			$('.top-nav a[href$="' + id + '"]').addClass('active');
			if (!$('.top-nav a.active').length) {
				$('.top-nav a[href$="#"]').addClass('active');
			}
		}
	})
});

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
