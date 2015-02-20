//ExampleViewController Object constructor
var SelectDishCtrl = function(view, model ) {

	//console.log(view.search);
	//console.log(view.searchField);
	//console.log(view.selectDishType);


	

	view.search.click(function()
		{
		var searchText = searchField.value;
 		console.log("test "+ searchText);
 		console.log($("#selectDishType :selected").text());
 		model.setFilterSearch($("#selectDishType :selected").text(), searchText);

 		}
 	);

	//view.buttons.click(function(){ 
			//console.log("Hej");}

	//);

	this.update = function(){

		view.buttons.click(function()
			{
			
				//console.log("Send to dish: "+this.getAttribute("id"));
				$("#FULLSCREEN").hide();
				$("#SELECT").hide();
				$("#SINGLE").show();
				console.log("selectDishcontroller shows pending");
				



				model.setCurrentDishId(Number(this.getAttribute("id")));
				console.log("currDish:" +model.getCurrentDishId());
				

				}
			);
	}

 
 
 
}