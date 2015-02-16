$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var exampleViewCtrl = new ExampleViewCtrl(exampleView, model);

	//var scview = new ScView($("#scview"), model);
	var ingredview = new IngredView($("#ingredview"), model);
	var ingredviewCtrl = new IngredViewCtrl(ingredview, model);
	var selectDish = new SelectDish($("#allCourses"), model);
	var overView = new OverView($("#overView"), model);
	var menuView = new MenuView($("#menuView"), model);
	var scview = new ScView($("#scview"), model);
});