//ExampleViewController Object constructor
var IngredViewCtrl = function(view, model ) {
 
 view.confBut.click(
 	function(){
 		console.log("Confirm current dish: "+model.getCurrentDishId());
 		$("#FULLSCREEN").hide();
 		$("#SELECT").show();
 		$("#SINGLE").hide();

 		model.addDishToMenu(model.getCurrentDishId());
 		model.setCurrentDishId("");

 	}
 );
 
}