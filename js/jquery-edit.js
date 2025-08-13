$(document).ready(function () {

	$(window).scroll(function () {

		if ($(window).scrollTop() > 40) {
			$(".top_arrow").fadeIn();
			$(".fix_nav").css("position", "fixed");
			$(".fix_nav").css("top", 0);
			$(".fix_nav").css("padding", "0");
			$(".fix_nav").css("z-index", "9999");
			$(".fix_nav").css("background-color", "#fff");
			$(".fix_nav").css("box-shadow", "0 -3px 9px 1px #ccc");
			$(".fix_nav2").css("position", "fixed");
			$(".fix_nav2").css("top", 0);
			$(".fix_nav2").css("padding", "0");
			$(".fix_nav2").css("z-index", "9999999");
			$(".fix_nav2").css("background-color", "#fff");
			$(".fix_nav2").css("box-shadow", "0 -3px 9px 1px #ccc");
		}
		else {
			$(".top_arrow").fadeOut();
			$(".fix_nav").css("top", "inherit");
			$(".fix_nav").css("position", "static");
			$(".fix_nav").css("padding", "0px 0px");
			$(".fix_nav").css("background-color", "transparent");
			$(".fix_nav").css("box-shadow", "none");
			$(".logo2 .fa").css("color", "#000");
			$(".fix_nav2").css("top", "inherit");
			$(".fix_nav2").css("position", "static");
			$(".fix_nav2").css("padding", "0px 0px");
			$(".fix_nav2").css("background-color", "transparent");
			$(".fix_nav2").css("box-shadow", "none");
		}
	});

	//////////////////////////////////////

	$(".top_arrow").click(function () {
		$("body,html").animate({
			"scrollTop": 0
		});
	});


});




window.onload = function () {
	animateSequence();
	animateRandom();
};

function animateSequence() {
	var a = document.getElementsByClassName('sequence');
	for (var i = 0; i < a.length; i++) {
		var $this = a[i];
		var letter = $this.innerHTML;
		letter = letter.trim();
		var str = '';
		var delay = 100;
		for (l = 0; l < letter.length; l++) {
			if (letter[l] != ' ') {
				str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
				delay += 150;
			} else
				str += letter[l];
		}
		$this.innerHTML = str;
	}
}

function animateRandom() {
	var a = document.getElementsByClassName('random');
	for (var i = 0; i < a.length; i++) {
		var $this = a[i];
		var letter = $this.innerHTML;
		letter = letter.trim();
		var delay = 70;
		var delayArray = new Array;
		var randLetter = new Array;
		for (j = 0; j < letter.length; j++) {
			while (1) {
				var random = getRandomInt(0, (letter.length - 1));
				if (delayArray.indexOf(random) == -1)
					break;
			}
			delayArray[j] = random;
		}
		for (l = 0; l < delayArray.length; l++) {
			var str = '';
			var index = delayArray[l];
			if (letter[index] != ' ') {
				str = '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[index] + '</span>';
				randLetter[index] = str;
			} else
				randLetter[index] = letter[index];
			delay += 80;
		}
		randLetter = randLetter.join("");
		$this.innerHTML = randLetter;
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}