$("a[href^='#']").on("click", function (e) {
	e.preventDefault();
	$(window).scrollTo($(this).attr("href"), {
		duration: 500,
		offset: -50
	});
});
