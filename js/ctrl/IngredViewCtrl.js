//ExampleViewController Object constructor
var IngredViewCtrl = function(view, model ) {
	console.log(view.plusButton);
 
 view.confBut.click(
 	function(){
 		console.log("Confirm current dish: ");
 	}
 );
 
}