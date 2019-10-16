$(document).ready(function () {

	$(".menu-link").click(function (event) {
		event.preventDefault();
		$(".menu-overlay").toggleClass("open");
		$(".menu").toggleClass("open");

	});
	//displaying coding skils
	$(function () {
		count = 0;
		skillArray = [
			"Basic Website Design",
			"WordPress website design based on theme",
			"WordPress website design from scratch"

		];
		setInterval(function () {
			count++;
			$("#word").fadeOut(1000, function () {
				$(this).text(skillArray[count % skillArray.length]).fadeIn(1000);
			});
		}, 2000);
	});

	//displaying coding language
	$(function () {
		count = 0;
		languageArray = [
			"Language used : HTML, CSS, JavaScript and JQuery",
			"Language used : HTML, CSS, PHP",
			"Language used : HTML, CSS, PHP"
		];
		setInterval(function () {
			count++;
			$("#language").fadeOut(1000, function () {
				$(this).text(languageArray[count % languageArray.length]).fadeIn(1000);
			});
		}, 2000);
	});

	//displaying website features
	$(function () {
		count = 0;
		featureArray = [
			"Single Page / Multi Page website",
			"Multi Page Wordpress website",
			"Multi Page Wordpress website"
		];
		setInterval(function () {
			count++;
			$("#features").fadeOut(1000, function () {
				$(this).text(featureArray[count % featureArray.length]).fadeIn(1000);
			});
		}, 2000);
	});

	//displaying website type
	$(function () {
		count = 0;
		typeArray = [
			"Static website",
			"Dynamic website with CMS",
			"Dynamic website with CMS"
		];
		setInterval(function () {
			count++;
			$("#type").fadeOut(1000, function () {
				$(this).text(typeArray[count % typeArray.length]).fadeIn(1000);
			});
		}, 2000);
	});

});