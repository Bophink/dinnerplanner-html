$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	//var exampleViewCtrl = new ExampleViewCtrl(exampleView, model);

	//var scview = new ScView($("#scview"), model);
	var ingredview = new IngredView($("#ingredview"), model);
	var ingredviewCtrl = new IngredViewCtrl(ingredview, model);
	var selectDish = new SelectDish($("#SELECT"), model);
	var selectDishCtrl = new SelectDishCtrl(selectDish, model);
	var overView = new OverView($("#overView"), model);
	var overViewCtrl = new OVCtrl(overView, model);
	var menuView = new MenuView($("#menuView"), model);
	var scview = new ScView($("#scview"), model);
	var scviewCtrl = new ScViewCtrl(scview, model);
	var dsView = new DSView($("#DINNERSTATUS"), model);
	var dsViewCtrl = new DSViewCtrl(dsView, model);
	var homeView = new HomeView($("#HOME"), model);
	var homeViewCtrl = new HomeViewCtrl(homeView, model);


	model.getAllDishes();

	//Default show/hide

	this.showSELECT = function(){

		$("#FULLSCREEN").hide();
 		$("#WITHMENU").show();
		$("#TITLE").show();
		$("#SELECT").show();
		$("#SINGLE").hide();
		$("#HOME").hide();
		

		model.setCurrentDishId("");
		alert("Det fungerar");
	}

	$("#FULLSCREEN").hide();
	$("#WITHMENU").hide();
	$("#TITLE").hide();
});