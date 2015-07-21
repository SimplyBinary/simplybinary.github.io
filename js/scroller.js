$("a[href^='#']").on("click", function (e) {
	e.preventDefault();
	if ($(this).attr("href") == "#") {
		$(window).scrollTo(0, {
			duration: 500,
		});
	}
	$(window).scrollTo($(this).attr("href"), {
		duration: 500,
		offset: -50,
	});
});
