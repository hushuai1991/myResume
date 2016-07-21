$(function() {
	var colors = [['#181115', '#30222A'], ['#181115', '#30222A'], ['#181115', '#30222A'], ['#181115', '#30222A']];
	for (var i = 1; i <= 5; i++) {
		var child = document.getElementById('circles-' + i),
		    percentage = 50 + ((5 - i) * 10);

		Circles.create({
			id : 'circles-' + i,
			percentage : percentage,
			radius : 80,
			width : 15,
			number : percentage,
			text : '%',
			colors : colors[i - 1]
		});
	}
	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop : $(this.hash).offset().top
		}, 1000);
	});
	$("#fullpage").fullpage({
		continuousVertical:true
	});
	$(".spacebowling").fancybox({
		showNavArrows:true
	});
}); 