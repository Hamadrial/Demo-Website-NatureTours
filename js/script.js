$(document).ready(function() {
  // Scroll to target element
  $("[scroll-to]").click(function () {
    $('input:checkbox:checked').prop('checked', false);

    var $this = $(this),
      $toElement = $this.attr('scroll-to'),
      $offset = $this.attr('scroll-offset') * 1 || 0,
      $speed = $this.attr('scroll-speed') * 1 || 500;

    $('html, body').animate({
      scrollTop: $($toElement).offset().top + $offset
    }, $speed);
  });
});