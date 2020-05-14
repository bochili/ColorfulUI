$(function() {
	$(".cui-animate-roll").click(function() {
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			if($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({
					scrollTop: targetOffset
				}, 800);
				return false;
			}
		}
	});
});
$(document).ready(function() {
	$(".cui-tab-option").click(function() {
		var number = $(".cui-tab-option").index(this);
		$(this).addClass("cui-tab-active");
		$(this).addClass("cui-tab-animate");
		$(this).siblings().removeClass("cui-tab-active");
		$(".cui-tab-content-text:eq(" + number + ")").show();
		$(".cui-tab-content-text:eq(" + number + ")").siblings().hide();
	});
	$('[cui-ripple]').on('click', function (e) {
		var rippleDiv = $('<div class="ripple" />'), rippleOffset = $(this).offset(), rippleY = e.pageY - rippleOffset.top, rippleX = e.pageX - rippleOffset.left, ripple = $('.ripple');
		rippleDiv.css({
			top: rippleY - ripple.height() / 2,
			left: rippleX - ripple.width() / 2,
			background: $(this).attr('cui-ripple-color')
		}).appendTo($(this));
		window.setTimeout(function () {
			rippleDiv.remove();
		}, 1000);
	});
});