//ExampleViewController Object constructor
var ScViewCtrl = function(view, model ) {
 
 view.button.click(
 	function(){
 		model.setCurrentDish("");
 		$("#FULLSCREEN").hide();
 		$("#SELECT").show();
 		$("#SINGLE").hide();


 	}
 );
 
}