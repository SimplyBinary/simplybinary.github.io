/*
 * sign-up-form.js
 *
 * validation, sumission and response handeling of sign up requests
 */

$('.sign-up-form').validate({
	errorElement: "small",
	validClass: "success",
  submitHandler: function(form) {
		$.ajax({
			url: form.action,
			type: form.method,
			data: $(form).serialize(),
			success: function(response) {
				if (response.status == "success") {
					$(form)
						.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
							$("#post-submit-message").show().addClass("animated fadeInUp");
						})
						.addClass("animated flipOutY");
				} else {
					$(form).addClass("animated shake");
				}
			}
		});
	}
});
