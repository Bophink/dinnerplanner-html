//ExampleView Object constructor
var MenuView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.dishPrice = container.find("#dishPrice");
	this.menuPrice = container.find("#menuPrice");


	var dishPrice = 0;

	for (i in model.getDish(1).ingredients) {
		dishPrice = dishPrice + model.getDish(1).ingredients[i].price;
	}

	this.dishPrice.html(dishPrice);
	this.menuPrice.html(model.getTotalMenuPrice);

}
 
