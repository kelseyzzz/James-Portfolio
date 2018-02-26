
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");

	var scene = $('#scene').get(0);
	var parallaxInstance = new Parallax(scene, {
		pointerEvents: true
	});


})();


