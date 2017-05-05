$(document).ready(function() {
	var container = $('#container');
	for(var i = 0; i < 16; i++) {
		for(var j = 0; j < 16; j++) {
			container.append('<div class="grid"></div>').children();
		}	
	}
	
	var grid = $('.grid');
	//change grid color
	grid.mouseenter(function() {
		$(this).css("backgroundColor", "green");
	});
		
	$(reset).click(function() {
		var input = prompt("Please enter grid size", "16");
		var gridSize = parseInt(input);
		container.empty();
		
		for(var i = 0; i < gridSize; i++) {
			for(var j = 0; j < gridSize; j++) {
				container.append('<div class="grid"></div>').children();
			}	
		}
		var grid = $('.grid');
		//change grid color
		grid.mouseenter(function() {
			$(this).css("backgroundColor", "green");
		});
	});
});