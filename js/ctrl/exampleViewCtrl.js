//ExampleViewController Object constructor
var ExampleViewCtrl = function(view, model ) {
 
 view.plusButton.click(
 	function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	}
 );
 
 view.minusButton.click(function(){
 	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	}
 );

 view.confButton.click(function(){
 	model.setCurrentDishId("");
 	$("#FULLSCREEN").show();
 	$("#overView").show();
 	$("#menuView").hide();
 	$("#WITHMENU").hide();
 	}
 );
}