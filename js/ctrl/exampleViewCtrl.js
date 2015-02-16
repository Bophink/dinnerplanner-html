//ExampleViewController Object constructor
var ExampleViewCtrl = function(view, model ) {
	console.log(view.plusButton);
 
 view.plusButton.click(
 	function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 		console.log("ändrat: "+model.getNumberOfGuests());
 	}
 );
 
 view.minusButton.click(function(){
 	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	console.log("ändrat: "+model.getNumberOfGuests());
 });
}