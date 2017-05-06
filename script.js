$(document).ready(function() {
	var container = $('#container');
	for(var i = 0; i < 16; i++) {
		for(var j = 0; j < 16; j++) {
			container.append('<div class="grid"></div>').children();
		}	
	}
	//Get container height and width
	var containerWidth = parseInt(container.css("width"));
	var containerHeight = parseInt(container.css("height"));

	var gridWidth = containerWidth / 16;
	var gridHeight = containerHeight / 16;
	
	var grid = $('.grid');
	grid.css('width', gridWidth);
	grid.css('height', gridHeight);
	
	//change grid color
	
	grid.mouseenter(function() {
		var gridColorOne = Math.floor((Math.random() * 255) + 1);
		var gridColorTwo = Math.floor((Math.random() * 255) + 1);
		var gridColorThree = Math.floor((Math.random() * 255) + 1);
		$(this).css("backgroundColor", "rgb(" + gridColorOne + ", " + gridColorTwo + ", " + gridColorThree);
	});
		
	$(reset).click(function() {
		var input = prompt("Please enter grid size", "16");
		var gridSize = parseInt(input);
		container.empty();


		var gridWidth = containerWidth / gridSize;
		var gridHeight = containerHeight / gridSize;

		
		for(var i = 0; i < gridSize; i++) {
			for(var j = 0; j < gridSize; j++) {
				container.append('<div class="grid"></div>').children();
			}	
		}

		var grid = $('.grid');

		grid.css('width', gridWidth);
		grid.css('height', gridHeight);
		//change grid color
		grid.mouseenter(function() {
			var gridColorOne = Math.floor((Math.random() * 255) + 1);
			var gridColorTwo = Math.floor((Math.random() * 255) + 1);
			var gridColorThree = Math.floor((Math.random() * 255) + 1);
			$(this).css("backgroundColor", "rgb(" + gridColorOne + ", " + gridColorTwo + ", " + gridColorThree);
		});
	});
});