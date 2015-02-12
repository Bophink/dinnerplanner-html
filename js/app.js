$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var scview = new ScView($("#scview"), model);
	var ingredview = new IngredView($("#ingredview"), model);
	var allCourses = new AllCouView($("#allCourses"), model);
});