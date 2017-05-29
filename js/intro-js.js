function hello() {
	console.log("Hello, World!");
}

function changeColor(element) {
	element.classList.add('red');
		
}

function reset() {
	var elements = document.querySelectorAll('.red');
	elements.forEach(function (element) {
	element.classList.remove('red');
	});
}