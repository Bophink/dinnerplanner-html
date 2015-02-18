//ExampleViewController Object constructor
var SelectDishCtrl = function(view, model ) {

	console.log(view.buttons);

	//view.buttons.click(function(){ 
			//console.log("Hej");}

	//);

	
	view.buttons.click(function()
		{
		//console.log(this.getAttribute("id"));
 		console.log("Send to dish: "+this.getAttribute("id"));
 		$("#FULLSCREEN").hide();
 		$("#SELECT").hide();
 		$("#SINGLE").show();

 		model.setCurrentDishId(Number(this.getAttribute("id")));
 		console.log("currDish:" +model.getCurrentDishId());
 		$("#pendingDish").hide();

 		}
 );

 
 
 
}