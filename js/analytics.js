$(document).ready(function () {
  $('.register-button').on('click', function (e) {
    if (!ga.q) {
      var url = $(this).attr("href");
      ga('send', 'event', 'outbound', 'click', 'clicked_to_registration', url, {"hitCallback":
        function () {
          document.location = url;
        }
      });
      e.preventDefault();
    }
  });
});
