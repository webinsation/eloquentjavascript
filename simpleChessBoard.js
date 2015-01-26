// controls the line breaks
for (var h=0; h < height/2; h++) {
    var row1 = "";  
  	var row2 = "";
  
  	// controls chars on a line
	for (var w=0; w < width/2; w++) {
		row1 += (white + black);
      	row2 += (black + white);
	}
	console.log(row1);
  	console.log(row2);
} 
