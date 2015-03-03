var HomeViewCtrl = function (view, model) {

	//console.log(view.startBtn);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	view.startBtn.click(
		function() {
			//console.log("hejhej");
			$("#FULLSCREEN").hide();
 			$("#WITHMENU").show();
 			$("#TITLE").show();
 			$("#SELECT").show();
 			$("#SINGLE").hide();
 			$("#HOME").hide();
 			

 			model.setCurrentDishId("");
		}
	)


	
}