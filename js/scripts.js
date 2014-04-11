$(document).ready(function(){
	// <link-effect-transitions>
	$('.link-effect').on('click',function (e) {

		e.preventDefault();
		$("#navbar").collapse('hide');
		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
	// </link-effect-transitions>
});


$(window).load(function() {
	var mq = window.matchMedia( "(min-width: 768px)" );
	if (mq.matches) {
		var margin = ($('#skills_row').height() - $('#ninja-div').height()) / 2;
		$('#ninja-div').css('margin-top', margin);
	}

	mq = window.matchMedia( "(max-width: 486px)" );
	if (mq.matches) {
		$('#bottom-link-list').removeClass('list-inline');
		$('#bottom-link-list').addClass('list-unstyled');
		console.log("match");
	}
});

