//ExampleViewController Object constructor
var DSViewCtrl = function(view, model ) {
 
 view.confButton.click(
 	function(){
 		console.log("KNapp klnapp hej hej");
 		model.setCurrentDishId("");
 		$("#FULLSCREEN").hide();
 		$("#WITHMENU").show();
 		$("#SELECT").show();
 		$("#SINGLE").hide();


 	}
 );
 
}