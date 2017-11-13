$(document).ready(function() {
	let fancyName = document.querySelector('.fancy-name');
	var options = {
		size: 200, // Font size, defined by the height of the letters (pixels)
		weight: 3, // Font weight (pixels)
		rounded: true, // Rounded letter endings
		color: '#b8f8d4', // Font color '#b8f8d4'
		duration: 1, // Duration of the animation of each letter (seconds)
		delay: [0, 0.1], // Delay animation among letters (seconds)
		fade: 1, // Fade effect duration (seconds)
		easing: d3_ease.easeCubicInOut.ease, // Easing function
		individualDelays: false // If false (default), every letter delay increase gradually, showing letters from left to right always. If you want to show letters in a disorderly way, set it to true, and define different delays for the desired letters.
	};

	// Initializing the text (Letters parameters: container-element, options)
	let myText = new Letters(fancyName, options);
	myText.show(options);
	$('.fancy-name').mouseenter(function() {
		myText.show(options);
	});
});
